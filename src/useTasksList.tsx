import { useState } from "react";
import { TaskInterface, TaskState } from "./interfaces/tasks";

const useTasksList = (storageKey: string) => {
  const [allTasks, setAllTasks] = useState<TaskInterface[]>([]);

  const loadFromStorage = (): TaskInterface[] => {
    const storageContent: string | null = localStorage.getItem(storageKey);
    const tasks = storageContent === null ? [] : JSON.parse(storageContent);

    return tasks;
  };

  const load = (): void => {
    const tasks = loadFromStorage();
    setAllTasks(tasks);
  };

  const saveStorage = (): void => {
    localStorage.setItem(storageKey, JSON.stringify(allTasks));
  };

  const add = (task: TaskInterface): void => {
    let taskWithId = { ...task, id: getNewId() };
    setAllTasks([...allTasks, taskWithId]);
    saveStorage();
  };

  const replaceTaskById = (task: TaskInterface): void => {
    const filteredList = allTasks.filter(
      (t: TaskInterface) => task.id !== t.id
    );
    setAllTasks([...filteredList, task]);
    saveStorage();
  };

  const filterByState = (state: TaskState): TaskInterface[] => {
    return allTasks.filter((task: TaskInterface) => task.status === state);
  };

  const getNewId = (): number => {
    const allIds = allTasks.map((task: TaskInterface) => task.id);

    return allIds.length === 0 ? 1 : Math.max(...allIds) + 1;
  };

  return {
    tasksList: allTasks,
    filterByState,
    replaceTaskById,
    load,
    add,
  };
};

export default useTasksList;
