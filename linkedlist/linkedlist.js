class Node{
    constructor(val){
        this.val = val
        this.next = null;      
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;    
    }
    push(val){
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
            this.length++;
        
        return this;
    }
    pop(){
        if(!this.head){
            return undefined
        }
        let curr = this.head
        let temp = curr
        while(curr.next){
            temp = curr
            curr = curr.next
        }
        this.tail = temp
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return curr
    }
    shift(){
        if(!this.head){
            return undefined
        }
        let currhead = this.head
        this.head = this.head.next
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return currhead
    }
    unshift(val){
        let newhead = new Node(val)
        if(!this.head){
            this.head = newhead
            this.tail = newhead
        } else{
            newhead.next = this.head
            this.head = newhead
        }
        this.length++
        return this

    }
    get(index){
        if(index < 0 || index >= this.length){
            return null
        }
        let count = 0
        let curr = this.head
        while(count != index){
            curr = curr.next
            count++
        }
        return curr
    }
    set(index, val){
        let cnode = this.get(index)
        if(cnode === null){
            return false
        } 
        cnode.val = val
        return true
    }
    insert(index, val){
        let newNode = new Node(val)
        if(index < 0 || index > this.length){
            return false
        }
        if(index === this.length){
            this.push(val)
            return true
        }
        if(index === 0){
            this.unshift(val)
            return true
        }
        let prev = this.get(index-1)
        newNode.next = prev.next
        prev.next = newNode
        this.length++
        return true
    }
    delete(index){
        if(index < 0 || index >= this.length ){
            return undefined
        }
        if(index === this.length -1){
            this.pop()
            return true
        }
        if(index === 0 ){
            this.shift()
        } else{
            let prev = this.get(index - 1)
            let victim = prev.next
            prev.next = victim.next
            victim.next = null
            this.length--
            return victim
        }
    }
    reverse(){
        let node = this.head
        this.head = this.tail
        this.tail = node
        let next = null
        let prev = null
        while(node){
            next = node.next
            node.next = prev
            prev = node
            node = next

        }
        return this
    }
        
}

let list = new SinglyLinkedList()

list.push(10)
list.push(11)
list.push(20)

console.log(list.reverse())