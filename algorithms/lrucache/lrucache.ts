import { TDoublyListNode } from '../../datastructures/listnode/listnode';

export class LRUCache<K, T> {
  private capacity: number;
  private inner: Map<K, TDoublyListNode<K, T>>;
  private head: TDoublyListNode<K, T> | null;
  private tail: TDoublyListNode<K, T> | null;;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.inner = new Map<K, TDoublyListNode<K, T>>();
    this.head = { next: null, value: null, key: null };
    this.tail = { next: null, value: null, key: null };
  }

  public Get(key: K) {
    if (this.inner.has(key)) {
      const node = this.inner.get(key);
      this.remove(node);
      this.add(node);
      return node.value;
    }

    return null;
  }

  public Set(key: K, value: T) {
    if (this.inner.has(key)) {
      this.remove(this.inner.get(key));
    }

    const node: TDoublyListNode<K, T> = {
      value,
      key
    };

    this.add(node);
    this.inner.set(key, node);

    if (this.inner.size > this.capacity) {
      const node = this.head.next;
      this.remove(node);
      this.inner.delete(node.key);
    }
  }

  add = (node: TDoublyListNode<K, T>) => {
    const prev = this.tail.prev;
    this.tail.prev = node;
    node.next = this.tail;
    node.prev = prev;
    prev.next = node;
  };

  remove = (node: TDoublyListNode<K, T>) => {
    const prev = node.prev;
    const next = node.next;

    prev.next = next;
    next.prev = prev;
  };

}
