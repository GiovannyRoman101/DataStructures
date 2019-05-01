class HashTable {
    constructor(size = 53) {
        this.keymap = new Array(size)
    }
    _hash(key) {
        let total = 0
        let PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * PRIME + value) % this.keymap.length
        }
        return total
    }
    set(key, value) {
        let index = this._hash(key)
        if (this.keymap[index] === undefined) {
            this.keymap[index] = []
        }
        this.keymap[index].push([key, value])
    }
    get(key) {
        let index = this._hash(key)
        if (this.keymap[index]) {
            for (let i of this.keymap[index]) {
                if (i[0] === key) {
                    return i[1]
                }
            }
        }
        return undefined
    }
    keys() {
        let keys = []
        for (let key of this.keymap) {
            if (key) {
                for (let i = 0; i < key.length; i++) {
                    if (!keys.includes(key[i][0])) {
                        keys.push(key[i][0])
                    }
                }
            }
        }
        return keys
    }
    values() {
        let values = []
        for (let pair of this.keymap) {
            if (pair) {
                for (let i = 0; i < pair.length; i++) {
                    if (!values.includes(pair[i][1])) {
                        values.push(pair[i][1])
                    }
                }
            }
        }
        return values
    }
}

let table = new HashTable(5)
table.set("pink", 123)
table.set("pink", 12344)
table.set("blue", 3)
table.set("red", "lol")
table.set("p", "no")
table.set("hello", "why")
//console.log(table.keymap)
console.log(table.keys())
console.log(table.values())
