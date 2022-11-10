<?php 

namespace Libs;

class Utils {

    public static function getPropFromCol(string $colName): string {
        $parts = explode('_', $colName);

        array_shift($parts);
        
        if (count($parts) > 1) { 
            for ($i = 1; $i < count($parts); $i++) {
                $parts[$i] = ucfirst($parts[$i]);
            }
        }
        
        $propName = implode('', $parts);
 
        return $propName;
    }

    public static function getColFromProp(string $propName): string {
        $colName = $propName;

        if (preg_match('/[A-Z]/', $propName)) {
            $parts = preg_split('/(?=[A-Z])/', $propName);
            $parts = array_filter($parts, fn($x) => strtolower($x));
            $colName = implode('_', $parts);
        }
        
        return $colName;
    }

}
