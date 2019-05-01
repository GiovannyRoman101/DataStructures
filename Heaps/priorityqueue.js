
class Node{
    constructor(val, priority){
        this.val = val
        this.priority = priority
    }
}


class PriorityQueue{
    constructor() {
        this.values = []
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority)

        this.values.push(newNode)
        let index = this.values.length - 1
        while (index > 0) {
            let parentInd = Math.floor((index - 1) / 2)

            if (this.values[parentInd].priority > this.values[index].priority) {
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
    dequeue() {
        // remove max and replace the root with the last element
        let min = this.values[0]
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
                    if (this.values[left].priority < this.values[index].priority) {
                        swap = left
                    }
                }
                if (right < this.values.length) {
                    // check if swap has an index and compare it to right
                    if ( (this.values[right].priority < this.values[index].priority && swap === null) ||
                        (swap !== null && this.values[right].priority < this.values[swap].priority)) {
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
        return min
    }
}

let er = new PriorityQueue()
er.enqueue('Common cold',5)
er.enqueue('Gunshot wound',0)
er.enqueue('High Fever',3)
er.enqueue('broken arm',2)
er.enqueue('glass in foot',4)
console.log(er.values)
console.log(er.dequeue())

console.log(er.dequeue())
console.log(er.dequeue())
console.log(er.dequeue())