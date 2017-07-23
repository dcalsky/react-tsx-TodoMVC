export enum TodoStatus {
  completed,
  actived
}

export interface Todo {
  val: string,
  status: TodoStatus,
  visible: boolean,
  editing: boolean
}
