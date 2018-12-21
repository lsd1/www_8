<?php

namespace Vendor\Spout\Reader\ODS;

use Vendor\Spout\Reader\SheetInterface;
use Vendor\Spout\Reader\Wrapper\XMLReader;

/**
 * Class Sheet
 * Represents a sheet within a ODS file
 *
 * @package Vendor\Spout\Reader\ODS
 */
class Sheet implements SheetInterface
{
    /** @var \Vendor\Spout\Reader\ODS\RowIterator To iterate over sheet's rows */
    protected $rowIterator;

    /** @var int ID of the sheet */
    protected $id;

    /** @var int Index of the sheet, based on order in the workbook (zero-based) */
    protected $index;

    /** @var string Name of the sheet */
    protected $name;

    /**
     * @param XMLReader $xmlReader XML Reader, positioned on the "<table:table>" element
     * @param int $sheetIndex Index of the sheet, based on order in the workbook (zero-based)
     * @param \Vendor\Spout\Reader\ODS\ReaderOptions $options Reader's current options
     * @param string $sheetName Name of the sheet
     */
    public function __construct($xmlReader, $sheetIndex, $sheetName, $options)
    {
        $this->rowIterator = new RowIterator($xmlReader, $options);
        $this->index = $sheetIndex;
        $this->name = $sheetName;
    }

    /**
     * @api
     * @return \Vendor\Spout\Reader\ODS\RowIterator
     */
    public function getRowIterator()
    {
        return $this->rowIterator;
    }

    /**
     * @api
     * @return int Index of the sheet, based on order in the workbook (zero-based)
     */
    public function getIndex()
    {
        return $this->index;
    }

    /**
     * @api
     * @return string Name of the sheet
     */
    public function getName()
    {
        return $this->name;
    }
}
