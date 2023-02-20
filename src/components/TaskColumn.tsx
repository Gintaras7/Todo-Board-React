import { FC } from "react";
import { TaskInterface } from "../interfaces/tasks";
import Task from "./Task";

interface TaskProps {
  title: string;
  list: TaskInterface[];
  updateTask: (updatedTask: TaskInterface) => any;
}

const TaskColumn: FC<TaskProps> = ({ title, updateTask, list }): any => {
  return (
    <div className="bg-gray-200 rounded-lg px-2">
      <div className="text-2xl mt-2 mb-4 pl-1">{title}</div>
      {list.map((task: any, key: number) => (
        <Task task={task} updateTask={updateTask} key={key} />
      ))}
    </div>
  );
};

export default TaskColumn;
