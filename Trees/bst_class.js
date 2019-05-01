class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(val) {
        let newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
        } else {
            let curr = this.root
            while (true) {
                if (curr.val === val) {
                    return undefined
                }
                if (curr.val > val) {
                    if (!curr.left) {
                        curr.left = newNode
                        return this
                    } else {
                        curr = curr.left
                    }
                } else if (curr.val < val) {
                    if (!curr.right) {
                        curr.right = newNode
                        return this
                    } else {
                        curr = curr.right
                    }
                }
            }
        }
        return this
    }
    find(val) {
        if (!this.root) {
            return undefined
        } else {
            let curr = this.root
            while (curr) {
                if (curr.val === val) {
                    return curr
                } else if (curr.val > val) {
                    if (!curr.left) {
                        return undefined
                    } else {
                        curr = curr.left
                    }
                } else if (curr.val < val) {
                    if (!curr.right) {
                        return undefined
                    } else {
                        curr = curr.right
                    }
                }
            }
        }
    }
    bfs() {
        let queue = []
        let visited = []
        if (!this.root) {
            return visited
        } else {
            let curr = this.root
            queue.push(curr)
            while (queue.length !== 0) {
                curr = queue.shift()
                visited.push(curr.val)
                // can loop to get all children doesnt have to be a binary tree
                if (curr.left !== null) {
                    queue.push(curr.left)
                }
                if (curr.right !== null) {
                    queue.push(curr.right)
                }
            }
        }
        return visited
    }
    dfsPreOrder() {
        let visited = []
        let curr = this.root
        if (curr !== null) {
            function traverse(node) {
                visited.push(node.val)
                if (node.left !== null) {
                    traverse(node.left)
                }
                if (node.right !== null) {
                    traverse(node.right)
                }
            }
            traverse(curr)
        }
        return visited
    }
    dfsPostOrder() {
        let visited = []
        let curr = this.root
        if (curr !== null) {
            function traverse(node) {
                if (node.left !== null) {
                    traverse(node.left)
                }
                if (node.right !== null) {
                    traverse(node.right)
                }
                visited.push(node.val)
            }
            traverse(curr)
        }
        return visited
    }
    dfsInOrder() {
        let visited = []
        let curr = this.root
        if (curr !== null) {
            function traverse(node) {
                if (node.left !== null) {
                    traverse(node.left)
                }
                visited.push(node.val)
                if (node.right !== null) {
                    traverse(node.right)
                }
            }
            traverse(curr)
        }
        return visited
    }

    // columnByColumn() {
    //     let columns = {}
    //     let queue = []
    //     let list = []
    //     let col = 0
    //     if (!this.root) {
    //         return list
    //     } else {
    //         queue.push(this.root)
    //         while (queue.length > 0) {
    //             let curr = queue.shift()
    //             if(curr.left){
    //                 // try {curr.left , index -1}
    //                 queue.push(curr.left)
    //             }
    //             if(curr.right){
    //                 queue.push(curr.right)
    //             }
    //             if(columns[col] === undefined){
    //                 columns[col] = []
    //             }
    //             columns[col].push({curr,col})
    //         }
    //     }
    //     console.log(columns)
    // }
}

let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(3)
tree.insert(8)
tree.insert(15)
tree.insert(20)
tree.columnByColumn()
console.log(tree.dfsPreOrder())
console.log(tree.dfsPostOrder())
console.log(tree.dfsInOrder())
