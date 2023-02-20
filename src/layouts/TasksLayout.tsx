import { FC } from "react";

interface TasksLayoutInterface {
  children: JSX.Element[];
}

const TasksLayout: FC<TasksLayoutInterface> = ({ children }) => {
  return <div className="container mx-auto mt-10 px-4">{children}</div>;
};

export default TasksLayout;
