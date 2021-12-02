export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodosState {
  loading: boolean;
  error: string | null | undefined;
  data: Todo[] | undefined;
}
