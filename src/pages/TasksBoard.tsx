import React, { useEffect, useState } from "react";
import TaskColumn from "../components/Tasks/TaskColumn";
import TaskForm from "../components/Tasks/TaskForm";
import { filterByState, removeTaskById, getMaxId } from "../utils/tasksUtils";
import { TaskStateAndTitle } from "../interfaces/tasks";
import { TaskInterface, TaskState } from "../interfaces/tasks";
import TasksLayout from "../layouts/TasksLayout";
import useLocalStorage from "../utils/useLocalStorage";
import { DEFAULT_TASKS_LOCAL_STORAGE_KEY } from "../interfaces/settings";

const TasksBoard = () => {
  const { load, saveStorage } = useLocalStorage(
    DEFAULT_TASKS_LOCAL_STORAGE_KEY
  );
  const [tasks, setTasks] = useState<TaskInterface[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => initList(), [isLoaded]);
  useEffect(() => onTaskListUpdated(), [tasks]);

  const initList = () => {
    if (isLoaded) return;

    const loadedTasks = load();
    setTasks(loadedTasks as TaskInterface[]);
    setIsLoaded(true);
  };

  const onTaskListUpdated = () => {
    if (!isLoaded) return;
    saveStorage(tasks);
  };

  const propsForColumn = (title: string, list: TaskInterface[]) => {
    return {
      title,
      list,
      updateTask: (task: any) => updateTask(task),
    };
  };

  const addTask = (task: TaskInterface) => {
    const newTask = { ...task, id: getMaxId(tasks) };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (task: TaskInterface) => {
    const newList = removeTaskById(tasks, task);
    setTasks([...newList, task]);
  };

  return (
    <TasksLayout>
      <span className="block text-2xl mb-2 ml-0">Add task</span>
      <TaskForm onSave={addTask} />

      <span className="block text-2xl my-6 ml-0">Tasks board</span>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {TaskStateAndTitle().map(
          (keyAndTitlePair: { key: TaskState; title: string }, key: number) => (
            <TaskColumn
              key={key}
              {...propsForColumn(
                keyAndTitlePair.title,
                filterByState(tasks, keyAndTitlePair.key)
              )}
            />
          )
        )}
      </div>
    </TasksLayout>
  );
};

export default TasksBoard;
