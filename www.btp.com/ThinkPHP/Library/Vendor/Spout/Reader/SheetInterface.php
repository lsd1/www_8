<?php

namespace Vendor\Spout\Reader;

/**
 * Interface SheetInterface
 *
 * @package Vendor\Spout\Reader
 */
interface SheetInterface
{
    /**
     * Returns an iterator to iterate over the sheet's rows.
     *
     * @return \Iterator
     */
    public function getRowIterator();
}
