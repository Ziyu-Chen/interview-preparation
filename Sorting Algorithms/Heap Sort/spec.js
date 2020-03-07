const { expect } = require("chai");
const { Heap, heapSort } = require(".");

describe("Heaps", () => {
  let heap;
  beforeEach(() => {
    heap = new Heap();
  });

  describe("The Heap constructor", () => {
    it("should be a function", () => {
      expect(Heap).to.be.a("function");
    });
    it("should have a property named storage", () => {
      expect(heap.storage).to.exist;
    });
  });

  describe("The insert method", () => {
    it("should have a insert method that exists on the Heap prototype", () => {
      expect(Heap.prototype.insert).to.exist;
    });
    it("should insert a value into the heap", () => {
      heap.insert(1);
      expect(heap.storage[0]).to.equal(1);
    });
    it("should reorder the heap with each insert", () => {
      heap.insert(1);
      heap.insert(4);
      heap.insert(7);
      heap.insert(5);
      heap.insert(3);
      expect(heap.storage).to.eql([1, 3, 7, 5, 4]);
    });
  });

  describe("The removeMin method", () => {
    it("should have a removeMin method that exists on the Heap prototype", () => {
      expect(Heap.prototype.removeMin).to.exist;
    });
    it("should remove the min value", () => {
      heap.insert(1);
      heap.insert(4);
      heap.insert(7);
      heap.insert(5);
      heap.insert(3);
      expect(heap.removeMin()).to.equal(1);
    });
    it("should reorder the heap after each deletion", () => {
      heap.insert(1);
      heap.insert(4);
      heap.insert(7);
      heap.insert(5);
      heap.insert(3);
      heap.removeMin();
      expect(heap.storage).to.eql([3, 4, 7, 5]);
    });
  });
});

describe("heapSort", () => {
  it("should return an array", () => {
    expect(Array.isArray(heapSort())).to.eql(true);
  });

  it("should return a sorted array", () => {
    const arr = [1];
    const arr2 = [2, 1];
    const arr3 = [5, 3, 9, 7, 2, 1, 4, 8, 10, 6];
    const arr4 = [5, 3, 9, 7, 2, 1, 4, 8, 10, 5, 6, 5];
    expect(heapSort(arr)).to.deep.eql(arr);
    expect(heapSort(arr2)).to.deep.eql([1, 2]);
    expect(heapSort(arr3)).to.deep.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(heapSort(arr4)).to.deep.eql([1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 10]);
  });
});
