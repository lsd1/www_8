<?php

namespace Vendor\Spout\Writer\Exception\Border;

use Vendor\Spout\Writer\Exception\WriterException;
use Vendor\Spout\Writer\Style\BorderPart;

class InvalidStyleException extends WriterException
{
    public function __construct($name)
    {
        $msg = '%s is not a valid style identifier for a border. Valid identifiers are: %s.';

        parent::__construct(sprintf($msg, $name, implode(',', BorderPart::getAllowedStyles())));
    }
}
