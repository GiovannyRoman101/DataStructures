class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.size = 0
    }

    push(val){
        let newNode = new Node(val)
        if(!this.top){
            this.top = newNode
        } else{
            newNode.next = this.top
            this.top = newNode
        }
        this.size++
        return this.size

    }
    pop(){
        if(!this.top){
            return null
        }
        let removed = this.top
        this.top = removed.next
        removed.next = null
        this.size --
        return removed.val
    }
}

let stack = new Stack()
stack.push(10)
stack.push(320)
stack.push(20)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

console.log(stack)