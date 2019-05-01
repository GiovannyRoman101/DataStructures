class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}
class DoublyLinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        let newNode = new Node(val)
        if(!this.head && !this.tail){
            this.head = newNode
            this.tail = newNode
        } else{
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){
        if(!this.tail){
            return undefined
        }
        let remove = this.tail
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else {
            this.tail = remove.prev
            this.tail.next = null
            remove.prev = null
        }
        
        this.length--
        return remove
    }
    shift(){
        if(this.length ===0){
            return undefined
        }
        let oldhead = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
        } else{
            this.head = oldhead.next
            this.head.prev = null
            oldhead.next = null
        }
        this.length--
        return oldhead
    }
    unshift(val){
        let newhead = new Node(val)
        if(!this.head && !this.tail){
            this.head = newhead
            this.tail = newhead
        } else{
            newhead.next = this.head
            this.head.prev = newhead
            this.head = newhead
        }
        this.length++
        return this
    }
    get(index){
        if(index < 0 || index >= this.length){
            return null
        }
        if(index > this.length / 2 ){
            let count = this.length - 1
            let curr = this.tail
            while(index != count){
                curr = curr.prev
                count --
            }
            return curr
        } else{
            let count = 0
            let curr = this.head
            while(index != count){
                curr = curr.next
                count ++
            }
            return curr
        }
    }
    set(index,val){
        let altered = this.get(index)
        if(!altered){
            return false
        }
        altered.val = val
        return true
    }
    insert(index,val){
        if(index < 0 || index > this.length){
            return false
        }
        if(index === 0){
            this.unshift(val)
            return true
        }
        if(index === this.length){
            this.push(val)
            return true
        }
        let newNode = new Node(val)
        let prevNode = this.get(index -1)
        let nextNode = prevNode.next

        prevNode.next = newNode
        newNode.prev = prevNode
        newNode.next = nextNode
        nextNode.prev = newNode


        this.length++
        return true


    }
    delete(index){
        if(index < 0 || index >=this.length){
            return undefined
        }
        if(index === 0){
            return this.shift()
            
        }
        if(index === this.length-1){
            return this.pop()
            
        }
        let victim = this.get(index)
        let before = victim.prev
        let after = victim.next

        victim.next = null
        victim.prev = null
        before.next = after
        after.prev = before

        this.length--
        return victim
    }

    reverse(){
        let curr = this.head
        this.head = this.tail
        this.tail = curr
        
        while(curr){
            let next = curr.next
            let prev = curr.prev
            curr.prev = next
            curr.next = prev
            curr = next
        }
        return this
    }
}

let dll = new DoublyLinkedList()


dll.unshift(50)
dll.unshift(20)
dll.insert(2,999)
console.log(dll)
dll.insert(0,'new front')
console.log(dll)
dll.insert(1,'second element')
console.log(dll)

dll.delete(0)
console.log(dll)
dll.delete(2)
console.log(dll)
dll.delete(3)
console.log(dll)
dll.delete(-1)
console.log(dll)