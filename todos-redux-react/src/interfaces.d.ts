declare enum Filter {
	ALL,
	ACTIVE,
	COMPLETED
}

declare enum TodoStatus {
  completed,
  actived
}

interface ITodo {
  id: number,
  val: string,
  status: TodoStatus
}
