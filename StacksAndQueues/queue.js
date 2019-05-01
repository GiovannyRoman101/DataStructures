class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(val){
        let newNode = new Node(val)
        if(!this.first && !this.last){
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.size++
        return this.size
    }
    dequeue(){
        if(!this.first && !this.last){
            return null
        }
        let rmNode = this.first
        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size-- 
        return rmNode
        
    }
}
let q = new Queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
console.log(q)
console.log(q.dequeue().val)
console.log(q.dequeue().val)
console.log(q.dequeue().val)
console.log(q.dequeue())
