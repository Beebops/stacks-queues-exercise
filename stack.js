/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  // push 10 (first,last)
  //      10
  // first,last

  // push 100    100 -> 10
  //            first   last
  push(val) {
    let newNode = new Node(val)

    if (!this.size) {
      this.first = newNode
      this.last = newNode
    } else {
      newNode.next = this.first
      this.first = newNode
    }
    this.size++
    return undefined
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.size) throw new Error('Cannot pop from an empty stack')

    const value = this.first.val

    if (this.size === 1) {
      this.first = null
      this.last = null
    } else {
      this.first = this.first.next
    }

    this.size--

    return value
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.size === 0) return null

    return this.first.val
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0
  }
}

module.exports = Stack
