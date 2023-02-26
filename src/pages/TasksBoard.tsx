import React, { useEffect, useState } from "react";
import TaskColumn from "../components/Tasks/TaskColumn";
import TaskForm from "../components/Tasks/TaskForm";
import {
  filterByState,
  removeTaskById,
  getMaxId,
} from "../components/Tasks/utils/taskList";
import { TaskStateAndTitle } from "../components/Tasks/types/taskTypes";
import { TaskInterface, TaskState } from "../components/Tasks/types/taskTypes";
import TasksLayout from "../layouts/TasksLayout";
import useLocalStorage from "../utils/useLocalStorage";
import { DEFAULT_TASKS_LOCAL_STORAGE_KEY } from "../types/settings";

interface TitleAndKey {
  key: TaskState;
  title: string;
}

const TasksBoard = () => {
  const { load, saveStorage } = useLocalStorage(
    DEFAULT_TASKS_LOCAL_STORAGE_KEY
  );
  const [tasks, setTasks] = useState<TaskInterface[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (isLoaded) return;

    const loadedTasks = load();
    setTasks(loadedTasks as TaskInterface[]);
    setIsLoaded(true);
  }, [isLoaded, load]);

  const getColumnProps = ({ key, title }: TitleAndKey) => {
    return {
      title,
      list: filterByState(tasks, key),
      updateTask: (task: any) => updateTask(task),
    };
  };

  const addTask = (task: TaskInterface) => {
    const newTask = { ...task, id: getMaxId(tasks) };
    const newList = [...tasks, newTask];
    setTasks(newList);
    saveStorage(newList);
  };

  const updateTask = (task: TaskInterface) => {
    const filteredList = removeTaskById(tasks, task);
    const newList = [...filteredList, task];
    setTasks(newList);
    saveStorage(newList);
  };

  return (
    <TasksLayout>
      <span className="block text-2xl mb-2 ml-0">Add task</span>
      <TaskForm onSave={addTask} />
      <span className="block text-2xl my-6 ml-0">Tasks board</span>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {TaskStateAndTitle().map(
          (titleAndKeyPair: TitleAndKey, index: number) => (
            <TaskColumn key={index} {...getColumnProps(titleAndKeyPair)} />
          )
        )}
      </div>
    </TasksLayout>
  );
};

export default TasksBoard;
