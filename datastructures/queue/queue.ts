export class Queue<T> {
  private arr: T[];

  constructor() {
    this.arr = [];
  }

  enqueue = (item: T) => {
    this.arr.push(item);
  };

  dequeue = () => {
    return this.arr.shift();
  };

  peek = () => {
    return this.arr[0];
  };

  isEmpty = () => {
    return this.arr.length === 0;
  };
}
