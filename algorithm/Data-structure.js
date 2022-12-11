console.log('============栈============')
class Stack {
    constructor() {
            this.item = []
        }
        // 入栈
    push(element) {
            this.item.push(element)
        }
        // 出栈
    pop() {
            return this.item.pop()
        }
        // 栈顶元素
    get peek() {
            return this.item[this.item.length - 1]
        }
        // 判断栈空
    get isempty() {
            return !this.item.length
        }
        // 清空栈
    clear() {
        this.item = []
    }

    // 栈的尺寸
    get size() {
            return this.item.length
        }
        // 打印数据
    print() {
        console.log(this.item.toString())
    }
}

// 实例化一个栈
const stack = new Stack()
console.log(stack.isempty)
    // 添加元素
stack.push(5)
stack.push(8)

// 读取栈顶元素
console.log(stack.peek)

stack.push(11)
console.log(stack.size)
console.log(stack.isempty)

// 模拟队列
console.log('============队列============')
class Queue {
    constructor(item) {
        this.item = item || []
    }
    enqueue(element) {
        this.item.push(element)
    }
    dequeue() {
        return this.item.shift()
    }
    front() {
        return this.item[0]
    }
    clear() {
        this.item = []
    }
    get size() {
        return this.item.length
    }
    get isempty() {
        return !this.item.length
    }
    print() {
        return console.log(this.item.toString())
    }

}
const queue = new Queue()
console.log(queue.isempty)
queue.enqueue(13)
queue.enqueue(14)
queue.enqueue(16)
console.log(queue.size)
console.log(queue.isempty)
queue.dequeue()
queue.print()

// 优先队列，有优先级
class PriorityQueue {

    constructor() {
        this.items = []
    }

    enqueue(element, priority) {
        const queueElement = { element, priority }
        if (this.isEmpty) {
            this.items.push(queueElement)
        } else {
            const preIndex = this.items.findIndex((item) => queueElement.priority < item.priority)
            if (preIndex > -1) {
                this.items.splice(preIndex, 0, queueElement)
            } else {
                this.items.push(queueElement)
            }
        }
    }

    dequeue() {
        return this.items.shift()
    }

    front() {
        return this.items[0]
    }

    clear() {
        this.items = []
    }

    get size() {
        return this.items.length
    }

    get isEmpty() {
        return !this.items.length
    }

    print() {
        console.log(this.items)
    }
}
const priorityQueue = new PriorityQueue()
priorityQueue.enqueue('John', 2)
priorityQueue.enqueue('Jack', 1)
priorityQueue.enqueue('Camila', 1)
priorityQueue.enqueue('Surmon', 3)
priorityQueue.enqueue('skyRover', 2)
priorityQueue.enqueue('司马萌', 1)
priorityQueue.print()

console.log(priorityQueue.isEmpty, priorityQueue.size) // false 6
    // console.log(priorityQueue)

// 循环队列
class LoopQueue extends Queue {
    constructor(item) {
        super(item)
    }
    getIndex(index) {
        const length = this.item.length
        return index > length ? (index % length) : index
    }
    find(index) {
        return !this.isEmpty ? this.item[this.getIndex(index)] : null
    }
}
const loopQueue = new LoopQueue(['Surmon'])
loopQueue.enqueue('SkyRover')
loopQueue.enqueue('Even')
loopQueue.enqueue('Alice')
console.log(loopQueue.size, loopQueue.isempty) // 4 false

console.log(loopQueue.find(26)) // 'Even'
console.log(loopQueue.find(87651)) // 'Alice'

// 链表节点
console.log('============链表============')
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}
// 链表
class LinkedList {
    constructor() {
            this.head = null
            this.length = 0
        }
        // 添加元素
    append(element) {
            const node = new Node(element)
            let current = null
            if (this.head === null) {
                this.head = node
            } else {
                current = this.head
                while (current.next) {
                    current = current.next
                }
                current.next = node
            }
            this.length++
        }
        // 插入元素
    insert(position, element) {
            if (position >= 0 && position <= this.length) {
                const node = new Node(element)
                let current = this.head
                let previous = null
                let index = 0
                if (position === 0) {
                    this.head = node
                } else {
                    while (index++ < position) {
                        previous = current
                        current = current.next
                    }
                    node.next = current
                    previous.next = node
                }
                this.length++
                    return true

            }
            return false
        }
        // 移除指定位置的元素
    removeAt(position) {
        // 检查越界值
        if (position > -1 && position < length) {
            let current = this.head
            let previous = null
            let index = 0
            if (position === 0) {
                this.head = current.next
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            this.length--
                return current.element
        }
        return -1
    }

    // 删除指定文档
    remove(element) {
            const index = this.indexOf(element)
            return this.removeAt(index)
        }
        // 寻找元素下标
    findIndex(element) {
        let current = this.head
        let index = -1
        while (current) {
            if (element === current.element) {
                return index + 1
            }
            index++
            current = current.next
        }
        return -1
    }
    isEmpty() {
        return !this.length
    }

    size() {
            return this.length
        }
        // 转化为字符串
    toString() {
        let current = this.head
        let string = ''
        while (current) {
            string += current.element
            current = current.next
        }
        return string
    }

}
const linkedList = new LinkedList()

console.log(linkedList)
linkedList.append(2)
linkedList.append(6)
linkedList.append(24)
linkedList.append(152)

linkedList.insert(3, 18)
console.log(linkedList)
console.log(linkedList.findIndex(24))
console.log(linkedList.toString())

// 集合
console.log('============集合============')
class Set {
    constructor() {
        this.items = {}
    }
    has(value) {
        return this.items.hasOwnProperty(value)
    }
    add(value) {
        if (!this.has(value)) {
            this.items[value] = value
            return true
        }
        return false
    }
    remove(value) {
        if (this.has(value)) {
            delete this.items[value]
            return true
        }
        return false
    }
    get size() {
        return Object.keys(this.items).length
    }
    get values() {
            // console.log(Object.keys(this.items))
            return Object.keys(this.items)
        }
        //并集
    union(otherSet) {
            const unionSet = new Set()
            this.values.forEach((v, i) => unionSet.add(this.values[i]))
            otherSet.values.forEach((v, i) => unionSet.add(otherSet.values[i]))
            return unionSet
        }
        // 交集
    intersection(otherSet) {
        const intersectionSet = new Set()
        this.values.forEach((v, i) => {
            if (otherSet.has(v)) {
                intersectionSet.add(v)
            }
        })
        return intersectionSet
    }

    // 差集
    difference(otherSet) {
            const differenceSet = new Set()
            this.values.forEach((v, i) => {
                if (!otherSet.has(v)) {
                    differenceSet.add(v)
                }
            })
            return differenceSet
        }
        // 子集
    subset(otherSet) {
        if (this.size > otherSet.size) {
            return false
        } else {
            return !this.values.some(v => !otherSet.has(v))
        }
    }
}


const set = new Set()
set.add('lili')
console.log(set.values) // ['lili'] 
console.log(set.has('lili')) // true 
console.log(set.size) // 1 
set.add(5)
console.log(set.values) // [ '5', 'lili' ]
console.log(set.has(5)) // true 
console.log(set.size) // 2 
    // set.remove('lili')
console.log(set.values) // ["5"] 
    // set.remove(5)
    // console.log(set.values) // []

const set2 = new Set()
set2.add("lihua")
set2.add("liming")
set2.add("lilan")

set2.add("lili")


console.log('并集', set.union(set2))
console.log('交集', set.intersection(set2))
console.log('差集', set2.difference(set))
console.log('子集', set2.subset(set))


// 字典
console.log('============字典============')
class Dictionary {
    constructor() {
        this.items = {}
    }
    set(key, value) {
        this.items[key] = value
    }
    get(key) {
        return this.items[key]
    }
    remove(key) {
        delete this.items[key]
    }
    get keys() {
        return Object.keys(this.items)
    }
    get values() {
        return Object.values(this.items)
    }
}

const dictionary = new Dictionary()
dictionary.set('Gandalf', 'gandalf@email.com')
dictionary.set('John', 'johnsnow@email.com')
dictionary.set('Tyrion', 'tyrion@email.com')

console.log(dictionary)
console.log(dictionary.keys)
console.log(dictionary.values)
console.log(dictionary.items)

console.log('================散列表')
    // 散列表(简单例子，无冲突)
class HashTable {
    constructor() {
            this.table = []
        }
        // 散列函数
    static loseloseHashCode(key) {
            let hash = 0
            for (let codePoint of key) {
                hash += codePoint.charCodeAt()
            }
            return hash % 37
                // John:74+111+104+110=399
        }
        // 修改和增加元素
    put(key, value) {
        const position = HashTable.loseloseHashCode(key)
        console.log(`${position} - ${key}`)
        this.table[position] = value
    }
    get(key) {
        return this.table[HashTable.loseloseHashCode(key)]
    }

    remove(key) {
        this.table[HashTable.loseloseHashCode(key)] = undefined
    }

}
const hash = new HashTable()
hash.put('Surmon', 'surmon.me@email.com') // 15 - Surmon
hash.put('John', 'johnsnow@email.com') // 29 - John
hash.put('Tyrion', 'tyrion@email.com') // 16 - Tyrion

// 测试get方法
console.log(hash.get('Surmon')) // surmon.me@email.com
console.log(hash.get('Loiane')) // undefined
console.log(hash)

// 散列(解决冲突)
class differHashTable {

    constructor() {
        this.table = []
    }

    // 散列函数
    static loseloseHashCode(key) {
            let hash = 0
            for (let codePoint of key) {
                hash += codePoint.charCodeAt()
            }
            return hash % 37
        }
        // 修改和增加元素(有冲突)
    put(key, value) {
        const position = HashTable.loseloseHashCode(key)
        if (this.table[position] === undefined) {
            this.table[position] = new LinkedList()
        }
        this.table[position].append({ key, value })
    }
    get(key) {
        const position = HashTable.loseloseHashCode(key)
        if (this.table[position] === undefined) return undefined
        const getElementValue = node => {
            if (!node && !node.element) return undefined
            if (Object.is(node.element.key, key)) {
                return node.element.value
            } else {
                return getElementValue(node.next)
            }
        }
        return getElementValue(this.table[position].head)
    }

    remove(key) {
        const position = HashTable.loseloseHashCode(key)
        if (this.table[position] === undefined) return undefined
        const getElementValue = node => {
            if (!node && !node.element) return false
            if (Object.is(node.element.key, key)) {
                this.table[position].remove(node.element)
                if (this.table[position].isEmpty) {
                    this.table[position] = undefined
                }
                return true
            } else {
                return getElementValue(node.next)
            }
        }
        return getElementValue(this.table[position].head)
    }

}
const differhash = new differHashTable()
differhash.put('Gandalf', 'gandalf@email.com')
differhash.put('John', 'johnsnow®email.com')
differhash.put('Tyrion', 'tyrion@email.com')
differhash.put('Aaron', 'aaronOemail.com')
differhash.put('Donnie', 'donnie@email.com')
differhash.put('Ana', 'ana©email.com')
differhash.put('Jonathan', 'jonathan@email.com')
differhash.put('Jamie', 'jamie@email.com')
differhash.put('Sue', 'sueOemail.com')
differhash.put('Mindy', 'mindy@email.com')
differhash.put('Paul', 'paul©email.com')
differhash.put('Nathan', 'nathan@email.com')
console.log(differhash)


// 树
console.log('============树============')
class TreeNode {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(key) {
            const newNode = new TreeNode(key)
            const insertNode = (node, newNode) => {
                if (newNode.key < node.key) {
                    if (node.left === null) {
                        node.left = newNode
                    } else {
                        insertNode(node.left, newNode)
                    }
                } else {
                    if (node.right === null) {
                        node.right = newNode
                    } else {
                        insertNode(node.right, newNode)
                    }
                }
            }
            if (!this.root) {
                this.root = newNode
            } else {
                insertNode(this.root, newNode)
            }
        }
        //  中序遍历
    inOrderTraverse(callback) {
            const inOrderTraverseNode = (node, callback) => {
                if (node !== null) {
                    inOrderTraverseNode(node.left, callback)
                    callback(node.key)
                    inOrderTraverseNode(node.right, callback)
                }
            }
            inOrderTraverseNode(this.root, callback)
        }
        // 先序遍历
    preOrderTraverse(callback) {
        const preOrderTraverseNode = (node, callback) => {
            if (node !== null) {
                callback(node.key)
                preOrderTraverseNode(node.left, callback)
                preOrderTraverseNode(node.right, callback)
            }
        }
        preOrderTraverseNode(this.root, callback)
    }

    // 后序遍历
    postOrderTraverse(callback) {
        const postOrderTraverseNode = (node, callback) => {
            if (node !== null) {
                postOrderTraverseNode(node.left, callback)
                postOrderTraverseNode(node.right, callback)
                callback(node.key)
            }
        }
        postOrderTraverseNode(this.root, callback)
    }

    // 搜索最小值和最大值（二叉排序树的最小值在树的最左边，最大值在树的最右边）
    min(node) {
        const minNode = node => {
            return node ? (node.left ? minNode(node.left) : node) : null
        }
        return minNode(node || this.root)
    }

    max(node) {
            const maxNode = node => {
                return node ? (node.right ? maxNode(node.right) : node) : null
            }
            return maxNode(node || this.root)
        }
        // 搜索一个特定的值
    search(key) {
        const searchNode = (node, key) => {
            if (node === null) return false
            if (node.key === key) return node
            return searchNode((key < node.key) ? node.left : node.right, key)
        }
        return searchNode(root, key)
    }

    // 移除一个节点（待修改）
    remove(key) {
        const removeNode = (node, key) => {
            if (node === null) return false
            if (node.key === key) {
                console.log(node)
                if (node.left === null && node.right === null) {
                    let _node = node
                    node = null
                    return _node
                } else {
                    console.log('key', key)
                }
            } else if (node.left !== null && node.key > key) {
                if (node.left.key === key) {
                    node.left.key = this.min(node.left.right).key
                    removeNode(node.left.right, node.left.key)
                    return node.left
                } else {
                    return removeNode(node.left, key)
                }
            } else if (node.right !== null && node.key < key) {
                if (node.right.key === key) {
                    node.right.key = this.min(node.right.right).key
                    removeNode(node.right.right, node.right.key)
                    return node.right
                } else {
                    return removeNode(node.right, key)
                }
            } else {
                return false
            }
            return removeNode((key < node.key) ? node.left : node.right, key)
        }
        return removeNode(this.root, key)
    }



}
const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
console.log('tree', tree)
tree.inOrderTraverse(value => { console.log(value) })


console.log("=========图==========")
class Graph {
    constructor() {
        this.vertices = []
        this.adjList = new Dictionary()
    }

    // 添加顶点
    addVertex(v) {
            this.vertices.push(v)
            this.adjList.set(v, [])
        }
        // 添加线
    addEdge(v, w) {
        this.adjList.get(v).push(w)
        this.adjList.get(w).push(v)
    }

    toString() {
            return this.vertices.reduce((r, v, i) => {
                // console.log('---', r, 'v', v)
                return this.adjList.get(v).reduce((r, w, i) => {
                    // console.log('--', r, 'w', w)
                    return r + `${w} `
                }, `${r}n${v} => `)
            }, '')
        }
        // 广度优先搜索
        // breadth first search
    bfs(v, callback) {
            const read = []
            const adjList = this.adjList
            let pending = [v || this.vertices[0]]
            const readVertices = vertices => { // ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
                vertices.forEach(key => {
                    read.push(key) // read = ['A']
                    pending.shift() //pending = []  ['C', 'D']
                    adjList.get(key).forEach(v => { //['B', 'C', 'D']   ['A', 'E', 'F']
                        if (!pending.includes(v) && !read.includes(v)) {
                            pending.push(v) ////pending = ['B', 'C', 'D'] ['C', 'D','E', 'F']
                        }
                    })
                    if (callback) callback(key)
                    if (pending.length) readVertices(pending)
                })
            }
            readVertices(pending)
        }
        //  使用BFS寻找最短路径，,计算每一个节点所在的层数
    bfs1(v, callback) {
            const read = []
            const distances = []
            const predecessors = []
            const adjList = this.adjList
            const pending = [v || this.vertices[0]]
            const readVertices = vertices => {
                vertices.forEach(key => {
                    read.push(key)
                    pending.shift()
                    distances[key] = distances[key] || 0
                    predecessors[key] = predecessors[key] || null
                    adjList.get(key).forEach(v => {
                        if (!pending.includes(v) && !read.includes(v)) {
                            pending.push(v)
                            distances[v] = distances[key] + 1
                            predecessors[v] = key
                        }
                    })
                    if (callback) callback(key)
                    if (pending.length) readVertices(pending)
                })
            }
            readVertices(pending)
            return { distances, predecessors }
        }
        // 构建从顶点fromVertex(A)到其他顶点的路径
    distance(fromVertex) {
            const vertices = this.vertices
            const { distances, predecessors } = this.bfs1(fromVertex)
            vertices.forEach(toVertex => {
                if (!!distances[toVertex]) { //distances存着某个顶点的层数，不输出A（根节点）的顶点路径
                    // console.log(distances[toVertex])
                    let preVertex = predecessors[toVertex] //前驱节点
                    let slug = ''
                    while (fromVertex !== preVertex) {
                        slug = `${preVertex} - ${slug}`
                        preVertex = predecessors[preVertex]
                    }
                    slug = `${fromVertex} - ${slug}${toVertex}`
                    console.log(slug)
                }
            })
        }
        // depth first search
    dfs(callback) {
        const read = []
        const adjList = this.adjList
        const readVertices = vertices => {
            vertices.forEach(key => {
                if (read.includes(key)) return false
                read.push(key)
                if (callback) callback(key)
                if (read.length !== this.vertices.length) {
                    readVertices(adjList.get(key))
                }
            })
        }
        readVertices(adjList.keys)
    }
}

const graph = new Graph()


graphnode = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
graphnode.forEach(c => graph.addVertex(c))

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

console.log(graph.toString())
    // nA => B C D nB => A E F nC => A D G nD => A C G H nE => B I nF => B nG => C D nH => D nI => E
graph.bfs(graph.vertices[0], value => console.log('Visited vertex: ' + value))
console.log(graph.bfs1(graph.vertices[0]))
graph.distance(graph.vertices[0])

graph.dfs(value => console.log('Visited vertex: ' + value))


// 算法
console.log('===========算法=========')
    // 冒泡排序
Array.prototype.bubbleSort = function() {
        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < this.length - 1 - i; j++) {
                if (this[j] > this[j + 1]) {
                    let aux = this[j]
                    this[j] = this[j + 1]
                    this[j + 1] = aux
                }
            }
        }
    }
    // 选择排序
Array.prototype.selectionSort = function() {
        let indexMin
        for (let i = 0; i < this.length - 1; i++) {
            indexMin = i
            for (var j = i; j < this.length; j++) {
                if (this[indexMin] > this[j]) {
                    indexMin = j
                }
            }
            if (i !== indexMin) {
                let aux = this[i]
                this[i] = this[indexMin]
                this[indexMin] = aux
            }
        }
        return this
    }
    // 插入排序
Array.prototype.insertionSort = function() {
    let j
    let temp
    for (let i = 1; i < this.length; i++) {
        j = i
        temp = this[i]
        while (j > 0 && this[j - 1] > temp) {
            this[j] = this[j - 1]
            j--
        }
        this[j] = temp
        console.log(this.join(', '))
    }
    return this
}

//  快速排序 
Array.prototype.quickSort = function() {
    const partition = (array, left, right) => {
        var pivot = array[Math.floor((right + left) / 2)]
        let i = left
        let j = right
        while (i <= j) {
            while (array[i] < pivot) {
                i++
            }
            while (array[j] > pivot) {
                j--
            }
            if (i <= j) {
                let aux = array[i]
                array[i] = array[j]
                array[j] = aux
                i++
                j--
            }
        }
        return i
    }
    const quick = (array, left, right) => {
        let index
        if (array.length > 1) {
            index = partition(array, left, right)
            if (left < index - 1) {
                quick(array, left, index - 1)
            }
            if (index < right) {
                quick(array, index, right)
            }
        }
    }
    quick(this, 0, this.length - 1)
    return this
}



// 搜索算法
// 顺序搜索
Array.prototype.sequentialSearch = function(item) {
        for (let i = 0; i < this.length; i++) {
            if (item === this[i]) return i
        }
        return -1
    }
    // 二分搜索
Array.prototype.binarySearch = function(item) {
    this.quickSort()
    let low = 0
    let mid = null
    let element = null
    let high = this.length - 1
    while (low <= high) {
        mid = Math.floor((low + high) / 2)
        element = this[mid]
        if (element < item) {
            low = mid + 1
        } else if (element > item) {
            high = mid - 1
        } else {
            return mid
        }
    }
    return -1
}


//  归并排序(一种分治算法)?
// 费波纳列
// 动态规划