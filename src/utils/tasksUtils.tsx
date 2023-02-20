import { TaskInterface, TaskState } from "../interfaces/tasks";

const removeTaskById = (
  allTasks: TaskInterface[],
  task: TaskInterface
): TaskInterface[] => {
  const filteredList = allTasks.filter((t: TaskInterface) => task.id !== t.id);

  return filteredList;
};

const filterByState = (
  allTasks: TaskInterface[],
  state: TaskState
): TaskInterface[] => {
  return allTasks.filter((task: TaskInterface) => task.status === state);
};

const getMaxId = (allTasks: TaskInterface[]): number => {
  const allIds = allTasks.map((task: TaskInterface) => task.id);

  return allIds.length === 0 ? 1 : Math.max(...allIds) + 1;
};

export { removeTaskById, filterByState, getMaxId };
