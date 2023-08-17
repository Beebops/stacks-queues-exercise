/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined.
   * the last value is the last node added
   * the first value is the first node added
   */

  enqueue(val) {
    let newNode = new Node(val)

    if (!this.size) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last = newNode
    }
    this.size++
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty.
   * the last value is the last node added
   * the first value is the first node added
   *  */

  dequeue() {
    if (!this.size) throw new Error('Cannot dequeue an empty que')

    const value = this.first.val

    if (this.size === 1) {
      this.first = null
      this.last = null
    } else {
      this.first.next = this.first
    }
    this.size--
    return value
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.size === 0) return null
    return this.first.val
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0
  }
}

module.exports = Queue
