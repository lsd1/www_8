<?php

namespace Vendor\Spout\Reader\XLSX;

use Vendor\Spout\Reader\IteratorInterface;
use Vendor\Spout\Reader\XLSX\Helper\SheetHelper;
use Vendor\Spout\Reader\Exception\NoSheetsFoundException;

/**
 * Class SheetIterator
 * Iterate over XLSX sheet.
 *
 * @package Vendor\Spout\Reader\XLSX
 */
class SheetIterator implements IteratorInterface
{
    /** @var \Vendor\Spout\Reader\XLSX\Sheet[] The list of sheet present in the file */
    protected $sheets;

    /** @var int The index of the sheet being read (zero-based) */
    protected $currentSheetIndex;

    /**
     * @param string $filePath Path of the file to be read
     * @param \Vendor\Spout\Reader\XLSX\ReaderOptions $options Reader's current options
     * @param \Vendor\Spout\Reader\XLSX\Helper\SharedStringsHelper $sharedStringsHelper
     * @param \Vendor\Spout\Common\Helper\GlobalFunctionsHelper $globalFunctionsHelper
     * @throws \Vendor\Spout\Reader\Exception\NoSheetsFoundException If there are no sheets in the file
     */
    public function __construct($filePath, $options, $sharedStringsHelper, $globalFunctionsHelper)
    {
        // Fetch all available sheets
        $sheetHelper = new SheetHelper($filePath, $options, $sharedStringsHelper, $globalFunctionsHelper);
        $this->sheets = $sheetHelper->getSheets();

        if (count($this->sheets) === 0) {
            throw new NoSheetsFoundException('The file must contain at least one sheet.');
        }
    }

    /**
     * Rewind the Iterator to the first element
     * @link http://php.net/manual/en/iterator.rewind.php
     *
     * @return void
     */
    public function rewind()
    {
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
        return ($this->currentSheetIndex < count($this->sheets));
    }

    /**
     * Move forward to next element
     * @link http://php.net/manual/en/iterator.next.php
     *
     * @return void
     */
    public function next()
    {
        // Using isset here because it is way faster than array_key_exists...
        if (isset($this->sheets[$this->currentSheetIndex])) {
            $currentSheet = $this->sheets[$this->currentSheetIndex];
            $currentSheet->getRowIterator()->end();

            $this->currentSheetIndex++;
        }
    }

    /**
     * Return the current element
     * @link http://php.net/manual/en/iterator.current.php
     *
     * @return \Vendor\Spout\Reader\XLSX\Sheet
     */
    public function current()
    {
        return $this->sheets[$this->currentSheetIndex];
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
        // make sure we are not leaking memory in case the iteration stopped before the end
        foreach ($this->sheets as $sheet) {
            $sheet->getRowIterator()->end();
        }
    }
}
