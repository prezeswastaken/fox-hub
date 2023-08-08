<?php

namespace App\Helpers;

class PhotoGetter
{
    public static function getPhotoLink()
    {
        $photoLink = 'https://randomfox.ca/images/' . rand(0, 123) . '.jpg';
        return $photoLink;
    }
}
