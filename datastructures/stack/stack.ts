export class Stack<T> {
  private arr: T[];

  constructor() {
    this.arr = [];
  }

  push = (item: T) => {
    this.arr.push(item);
  };

  pop = () => {
    return this.arr.pop();
  };

  peek = () => {
    return this.arr[this.arr.length-1];
  };

  isEmpty = () => {
    return this.arr.length === 0;
  };
}
