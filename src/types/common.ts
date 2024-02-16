export type ArbitraryObject<T> = {
  [key: string]: T
}

export type Id = number;

export type SystemPresetColors =
  'gray'
  | 'blue'
  | 'cyan'
  | 'red'
  | 'green'
  | 'orange'
  | 'purple'
  | 'brown'
  | 'indigo'
  | 'mint'
  | 'pink'
  | 'teal'
  | 'yellow';