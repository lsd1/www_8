<?php

namespace Vendor\Spout\Reader\ODS;

use Vendor\Spout\Common\Exception\IOException;
use Vendor\Spout\Reader\Exception\XMLProcessingException;
use Vendor\Spout\Reader\IteratorInterface;
use Vendor\Spout\Reader\Wrapper\XMLReader;

/**
 * Class SheetIterator
 * Iterate over ODS sheet.
 *
 * @package Vendor\Spout\Reader\ODS
 */
class SheetIterator implements IteratorInterface
{
    const CONTENT_XML_FILE_PATH = 'content.xml';

    /** Definition of XML nodes name and attribute used to parse sheet data */
    const XML_NODE_TABLE = 'table:table';
    const XML_ATTRIBUTE_TABLE_NAME = 'table:name';

    /** @var string $filePath Path of the file to be read */
    protected $filePath;

    /** @var \Vendor\Spout\Reader\ODS\ReaderOptions Reader's current options */
    protected $options;

    /** @var XMLReader The XMLReader object that will help read sheet's XML data */
    protected $xmlReader;

    /** @var \Vendor\Spout\Common\Escaper\ODS Used to unescape XML data */
    protected $escaper;

    /** @var bool Whether there are still at least a sheet to be read */
    protected $hasFoundSheet;

    /** @var int The index of the sheet being read (zero-based) */
    protected $currentSheetIndex;

    /**
     * @param string $filePath Path of the file to be read
     * @param \Vendor\Spout\Reader\ODS\ReaderOptions $options Reader's current options
     * @throws \Vendor\Spout\Reader\Exception\NoSheetsFoundException If there are no sheets in the file
     */
    public function __construct($filePath, $options)
    {
        $this->filePath = $filePath;
        $this->options = $options;
        $this->xmlReader = new XMLReader();

        /** @noinspection PhpUnnecessaryFullyQualifiedNameInspection */
        $this->escaper = \Vendor\Spout\Common\Escaper\ODS::getInstance();
    }

    /**
     * Rewind the Iterator to the first element
     * @link http://php.net/manual/en/iterator.rewind.php
     *
     * @return void
     * @throws \Vendor\Spout\Common\Exception\IOException If unable to open the XML file containing sheets' data
     */
    public function rewind()
    {
        $this->xmlReader->close();

        if ($this->xmlReader->openFileInZip($this->filePath, self::CONTENT_XML_FILE_PATH) === false) {
            $contentXmlFilePath = $this->filePath . '#' . self::CONTENT_XML_FILE_PATH;
            throw new IOException("Could not open \"{$contentXmlFilePath}\".");
        }

        try {
            $this->hasFoundSheet = $this->xmlReader->readUntilNodeFound(self::XML_NODE_TABLE);
        } catch (XMLProcessingException $exception) {
           throw new IOException("The content.xml file is invalid and cannot be read. [{$exception->getMessage()}]");
       }

        $this->currentSheetIndex = 0;
    }

    /**
     * Checks if current position is valid
     * @link http://php.net/manual/en/iterator.valid.php
     *
     * @return bool
     */
    public function valid()
    {
        return $this->hasFoundSheet;
    }

    /**
     * Move forward to next element
     * @link http://php.net/manual/en/iterator.next.php
     *
     * @return void
     */
    public function next()
    {
        $this->hasFoundSheet = $this->xmlReader->readUntilNodeFound(self::XML_NODE_TABLE);

        if ($this->hasFoundSheet) {
            $this->currentSheetIndex++;
        }
    }

    /**
     * Return the current element
     * @link http://php.net/manual/en/iterator.current.php
     *
     * @return \Vendor\Spout\Reader\ODS\Sheet
     */
    public function current()
    {
        $escapedSheetName = $this->xmlReader->getAttribute(self::XML_ATTRIBUTE_TABLE_NAME);
        $sheetName = $this->escaper->unescape($escapedSheetName);

        return new Sheet($this->xmlReader, $sheetName, $this->currentSheetIndex, $this->options);
    }

    /**
     * Return the key of the current element
     * @link http://php.net/manual/en/iterator.key.php
     *
     * @return int
     */
    public function key()
    {
        return $this->currentSheetIndex + 1;
    }

    /**
     * Cleans up what was created to iterate over the object.
     *
     * @return void
     */
    public function end()
    {
        $this->xmlReader->close();
    }
}
