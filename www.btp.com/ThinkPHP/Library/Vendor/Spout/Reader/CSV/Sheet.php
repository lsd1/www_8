<?php

namespace Vendor\Spout\Reader\CSV;

use Vendor\Spout\Reader\SheetInterface;

/**
 * Class Sheet
 *
 * @package Vendor\Spout\Reader\CSV
 */
class Sheet implements SheetInterface
{
    /** @var \Vendor\Spout\Reader\CSV\RowIterator To iterate over the CSV's rows */
    protected $rowIterator;

    /**
     * @param resource $filePointer Pointer to the CSV file to read
     * @param \Vendor\Spout\Reader\CSV\ReaderOptions $options
     * @param \Vendor\Spout\Common\Helper\GlobalFunctionsHelper $globalFunctionsHelper
     */
    public function __construct($filePointer, $options, $globalFunctionsHelper)
    {
        $this->rowIterator = new RowIterator($filePointer, $options, $globalFunctionsHelper);
    }

    /**
     * @api
     * @return \Vendor\Spout\Reader\CSV\RowIterator
     */
    public function getRowIterator()
    {
        return $this->rowIterator;
    }
}
