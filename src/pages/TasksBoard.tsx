import React from "react";
import TaskColumn from "../components/TaskColumn";
import TaskForm from "../components/TaskForm";
import useTasksList from "../useTasksList";
import { TaskStateAndTitle } from "../interfaces/tasks";
import { TaskInterface, TaskState } from "../interfaces/tasks";
import TasksLayout from "../layouts/TasksLayout";

const TasksBoard = () => {
  const { add, filterByState, replaceTaskById } = useTasksList("keyyy");

  const propsForColumn = (title: string, list: TaskInterface[]) => {
    return {
      title,
      list,
      updateTask: (a: any) => replaceTaskById(a),
    };
  };

  return (
    <TasksLayout>
      <TaskForm onSave={add} />
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
        {TaskStateAndTitle().map(
          (keyAndTitlePair: { key: TaskState; title: string }, key: number) => (
            <TaskColumn
              key={key}
              {...propsForColumn(
                keyAndTitlePair.title,
                filterByState(keyAndTitlePair.key)
              )}
            />
          )
        )}
      </div>
    </TasksLayout>
  );
};

export default TasksBoard;
