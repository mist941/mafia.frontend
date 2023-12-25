export type ArbitraryObject<T> = {
  [key: string]: T
}

export type FormDefaultProps<T> = {
  send: (params: T) => void;
}