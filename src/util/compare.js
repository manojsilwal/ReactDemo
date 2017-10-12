function compareValue(val1, val2){
    if(!val1 && !val2){
        return true;

    if(!val1 && val2){
        return false;
    }
    if(val1 && !val2){
        return true;
    }
    if(typeof val1 !== typeof val2){
        return false;
    }
    if(val1 === val2){
        return true;
    }
    if(typeof val1 === object){
        if(Array.isArray(val1) && !Array.isArray(val2)){
            if(!Array.isArray(val2)){
                return false;
            }
            else if(val1.length !== val2.length){
                return false;
            }
        }
        else{

        }
    }
    if((typeof val1 === object && !Array.isArray(val1)) && Object.keys(val1).length
        !== Object.keys(val1).length){
        return false;
    }

    for ( var p in val1 ) {
        var objectValue1 = val1[p], objectValue2 = val2[p];
        if (typeof(objectValue1) !== typeof(objectValue2)) {
            return false;
        }
        if (typeof (objectValue1) === 'function') {
            continue;
        }
        return true && compareValue(objectValue1, objectValue2);
    }
}