<?php

namespace Vendor\Spout\Reader;

use Vendor\Spout\Common\Exception\UnsupportedTypeException;
use Vendor\Spout\Common\Helper\GlobalFunctionsHelper;
use Vendor\Spout\Common\Type;

/**
 * Class ReaderFactory
 * This factory is used to create readers, based on the type of the file to be read.
 * It supports CSV and XLSX formats.
 *
 * @package Vendor\Spout\Reader
 */
class ReaderFactory
{
    /**
     * This creates an instance of the appropriate reader, given the type of the file to be read
     *
     * @api
     * @param  string $readerType Type of the reader to instantiate
     * @return ReaderInterface
     * @throws \Vendor\Spout\Common\Exception\UnsupportedTypeException
     */
    public static function create($readerType)
    {
        $reader = null;

        switch ($readerType) {
            case Type::CSV:
                $reader = new CSV\Reader();
                break;
            case Type::XLSX:
                $reader = new XLSX\Reader();
                break;
            case Type::ODS:
                $reader = new ODS\Reader();
                break;
            default:
                throw new UnsupportedTypeException('No readers supporting the given type: ' . $readerType);
        }

        $reader->setGlobalFunctionsHelper(new GlobalFunctionsHelper());

        return $reader;
    }
}
