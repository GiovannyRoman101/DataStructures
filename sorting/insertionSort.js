function insertionSort(arr){
    for(let i = 1 ; i < arr.length;i++){
        let currval = arr[i]
        //dont like this
        let j 
        for( j = i - 1; j >=0 && arr[j] >currval;j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currval
    }

    return arr
}

console.log(insertionSort([9,4,3,7,5,1,20,45]))