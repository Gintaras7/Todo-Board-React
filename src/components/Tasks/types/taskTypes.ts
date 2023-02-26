export enum TaskState {
  OPENED = 1,
  IN_PROGRESS = 2,
  DONE = 3,
  CLOSED = 4,
}

export interface TaskInterface {
  id: number;
  title: string;
  description: string;
  status: TaskState;
}

export interface AllowedTaskTransitions {
  [name: number]: TaskState[];
}

export function TaskStateAndTitle(): { key: TaskState; title: string }[] {
  return [
    { key: TaskState.OPENED, title: "Opened" },
    { key: TaskState.IN_PROGRESS, title: "In progress" },
    { key: TaskState.DONE, title: "Done" },
    { key: TaskState.CLOSED, title: "Closed" },
  ];
}

export function StateTransitionsMap(): AllowedTaskTransitions {
  return {
    [TaskState.OPENED]: [TaskState.IN_PROGRESS, TaskState.CLOSED],
    [TaskState.IN_PROGRESS]: [TaskState.CLOSED, TaskState.DONE],
    [TaskState.DONE]: [TaskState.CLOSED],
    [TaskState.CLOSED]: [TaskState.OPENED],
  };
}
