export enum TodoStatus {
  completed,
  actived
}

export interface Todo {
  val: string,
  status: TodoStatus,
  selected: boolean,
  visible: boolean,
  editing: boolean
}
