// Heap Sort
class Heap {
  constructor() {
    this.storage = [];
  }
  removeMin() {
    if (this.storage.length === 0) return;
    this.swap(0, this.storage.length - 1);
    const min = this.storage.pop();
    this.heapifyDown();
    return min;
  }
  insert(num) {
    this.storage.push(num);
    this.heapifyUp();
  }
  heapifyUp() {
    let currentIndex = this.storage.length - 1;
    while (this.hasParent(currentIndex)) {
      let done = true;
      const parentIndex = this.getParentIndex(currentIndex);
      if (this.storage[currentIndex] < this.storage[parentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
        done = false;
      }
      if (done) break;
    }
  }
  heapifyDown() {
    let currentIndex = 0;
    while (this.hasLeftChild(currentIndex)) {
      let done = true;
      if (this.hasRightChild(currentIndex)) {
        const leftChildIndex = this.getLeftChildIndex(currentIndex);
        const rightChildIndex = this.getRightChildIndex(currentIndex);
        const smallerChildIndex =
          this.storage[leftChildIndex] < this.storage[rightChildIndex]
            ? leftChildIndex
            : rightChildIndex;
        if (this.storage[currentIndex] > this.storage[smallerChildIndex]) {
          this.swap(currentIndex, smallerChildIndex);
          currentIndex = smallerChildIndex;
          done = false;
        }
      } else {
        const leftChildIndex = this.getLeftChildIndex(currentIndex);
        if (this.storage[currentIndex] > this.storage[leftChildIndex]) {
          this.swap(currentIndex, leftChildIndex);
          currentIndex = leftChildIndex;
          done = false;
        }
      }
      if (done) break;
    }
  }
  getLeftChildIndex(currentIndex) {
    return 2 * currentIndex + 1;
  }
  getRightChildIndex(currentIndex) {
    return 2 * currentIndex + 2;
  }
  getParentIndex(currentIndex) {
    return Math.ceil(currentIndex / 2) - 1;
  }
  hasLeftChild(currentIndex) {
    return this.getLeftChildIndex(currentIndex) < this.storage.length;
  }
  hasRightChild(currentIndex) {
    return this.getRightChildIndex(currentIndex) < this.storage.length;
  }
  hasParent(currentIndex) {
    return currentIndex > 0;
  }
  swap(i, j) {
    [this.storage[i], this.storage[j]] = [this.storage[j], this.storage[i]];
  }
}

const heapSort = (arr = []) => {
  const heap = new Heap();
  const result = [];
  arr.forEach(num => heap.insert(num));
  for (let i = 0; i < arr.length; i++) result.push(heap.removeMin());

  return result;
};

module.exports = { Heap, heapSort };
