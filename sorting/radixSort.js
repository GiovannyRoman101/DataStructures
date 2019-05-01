
function radixSort(arr){
    let longest = most_digit(arr)
    for(let i = 0; i < longest;i++){
        let buckets = Array.from({length:10},() => [] )
        for(let k = 0; k < arr.length; k++){
            buckets[get_digit(arr[k],i)].push(arr[k])
        }
        //... passes all arguments like an array of array passes all arrays
        arr = [].concat(...buckets)
        console.log(arr)
    }
    return arr
}

console.log(radixSort([123,45,1,4562,24]))


function get_digit(num,place){
    return Math.floor(Math.abs(num)/Math.pow(10,place))%10

}

function digit_count(num){
    if(num ===0){
        return 1
    }
    return Math.floor(Math.log10(Math.abs(num))) +1
}
function most_digit(arr){
    let max =0
    for(let i =0; i<arguments.length;i++){
        max = Math.max(max,digit_count(arr[i]))
    }
    return max
}
console.log(get_digit(12345,4))