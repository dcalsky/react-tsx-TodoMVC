export enum TodoStatus {
  doing,
  completed
}

export interface Todo {
  val: string,
  status: TodoStatus,
  selected: boolean
}