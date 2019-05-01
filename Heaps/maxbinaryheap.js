class MaxBinaryHeap {
    constructor() {
        this.values = []
    }
    insert(val) {
        this.values.push(val)
        let index = this.values.length - 1
        while (index > 0) {
            let parentInd = Math.floor((index - 1) / 2)
            if (this.values[parentInd] < this.values[index]) {
                let temp = this.values[index]
                this.values[index] = this.values[parentInd]
                this.values[parentInd] = temp
                index = parentInd
            } else {
                break
            }
        }
        return this
    }
    extractMax() {
        // remove max and replace the root with the last element
        let max = this.values[0]
        let end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end
            // take root and compare it to childs and chose the largest and check if the largest is bigger than the root
            // swap the root with the largest
            let index = 0
            while (true) {
                let left = index * 2 + 1
                let right = index * 2 + 2
                let swap = null

                if (left < this.values.length) {
                    if (this.values[left] > this.values[index]) {
                        swap = left
                    }
                }
                if (right < this.values.length) {
                    // check if swap has an index and compare it to right
                    if ( (this.values[right] > this.values[index] && swap === null) ||
                        (swap !== null && this.values[right] > this.values[swap])) {
                        swap = right
                    }
                }
                if (swap === null) {
                    break
                }
                this.values[index] = this.values[swap]
                this.values[swap] = end
                index = swap
            }
        }
        return max
    }
}

let heap = new MaxBinaryHeap()
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)

console.log(heap.values)
console.log(heap.extractMax())
console.log(heap.values)
console.log(heap.extractMax())
console.log(heap.values)
console.log(heap.extractMax())
console.log(heap.values)
console.log(heap.extractMax())
