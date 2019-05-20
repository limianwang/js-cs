export type TListNode<T> = {
  next?: TListNode<T> | null;
  value: T;
};

export type TDoublyListNode<K, T> = {
  prev?: TDoublyListNode<K, T> | null;
  next?: TDoublyListNode<K, T> | null;
  value: T;
  key: K;
};
