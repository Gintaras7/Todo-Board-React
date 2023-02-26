import { TaskInterface } from "./types/taskTypes";
import Task from "./Task";

interface TaskProps {
  title: string;
  list: TaskInterface[];
  updateTask: (updatedTask: TaskInterface) => any;
}

const TaskColumn = ({ title, updateTask, list }: TaskProps): any => {
  return (
    <div className="bg-gray-200 rounded-lg px-2">
      <div className="text-xl mt-2 mb-4 pl-1">{title}</div>
      {list.map((task: any, key: number) => (
        <Task task={task} updateTask={updateTask} key={key} />
      ))}
    </div>
  );
};

export default TaskColumn;
