import { TListNode } from '../listnode/listnode';

export class LinkedList<T> {
  private head: TListNode<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  addToHead = (item: T) => {
    const node = {
      value: item
    } as TListNode<T>;

    if (this.head !== undefined) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
    }
    this.size++;
  };

  removeFromHead = () => {
    if (this.isEmpty()) {
      return undefined;
    }

    const node = this.head;

    this.head = this.head.next;
    this.size--;

    return node.value;
  };

  addToTail = (item: T) => {
    const n = {
      value: item,
      next: undefined
    };

    if (this.head !== undefined) {
      let curr = this.head;

      while(curr.next !== undefined) {
        curr = curr.next;
      }

      curr.next = n;
    } else {
      this.head = n;
    }

    this.size++;
  };

  removeFromTail = () => {
    if (this.isEmpty()) {
      return undefined;
    }

    let curr = this.head;

    while(curr.next !== undefined && curr.next.next !== undefined) {
      curr = curr.next;
    }

    const node = curr.next;
    curr.next = null;
    this.size--;

    return node.value;
  };

  length = () => {
    return this.size;
  };

  isEmpty = () => {
    return this.head === null || this.head === undefined;
  }
}
