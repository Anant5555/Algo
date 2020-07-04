function sort(array){
    for(let i = 0; i <array.length; i++){
        let noSwaps= true;
        for(let j = 0; j < array.length - i; j++){
            if(array[j] > array[j+1]){
                let temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps){
            break;
        }
    }
    return array;
}

sort([4,1,11,6,77,3,2]);