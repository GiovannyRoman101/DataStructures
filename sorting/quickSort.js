function quickSort(arr, left =0,right = arr.length -1){
    if(left < right){
        let piv = pivot(arr,left,right)
        quickSort(arr,left,piv-1)
        quickSort(arr,piv+1,right)
    }
    return arr
    

}

function pivot(arr, start = 0,end = arr.length+1){
    let pivot_point = arr[start]
    let swap_index = start

    for(let i = start +1; i < arr.length;i++){
        if(pivot_point > arr[i]){
            swap_index++
            swap(arr, swap_index, i)
        }
    }
    swap(arr,start,swap_index)
    return swap_index
}

function swap(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

console.log(quickSort([4,8,2,1,5,7,6,3]))
