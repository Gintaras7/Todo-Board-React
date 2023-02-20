import { TaskInterface, TaskState } from "../interfaces/tasks";
import { FC } from "react";
import useTaskTransitions from "./useTaskTransitions";
import Button from "./common/Button";
interface TaskProps {
  task: TaskInterface;
  updateTask: (updatedTask: TaskInterface) => any;
}

interface TransitionToState {
  key: number;
  title: string;
}

const Task: FC<TaskProps> = ({ task, updateTask }): any => {
  const [allowedTransitionsList] = useTaskTransitions(task.status);

  const updateState = (transitTo: TaskState): void => {
    const updatedTaskState = { ...task, status: transitTo };

    updateTask(updatedTaskState);
  };

  return (
    <div className="my-3 p-2 border-1 bg-slate-50	rounded-md drop-shadow-md">
      <span className="text-lg text-black">{task.title}</span>
      <br />
      <span className="text-sm text-slate-600">{task.description}</span>
      <div className="bg-dark-600">
        {allowedTransitionsList.map(
          (transition: TransitionToState, key: number) => (
            <Button onClick={() => updateState(transition.key)}>
              {transition.title}
            </Button>
          )
        )}
      </div>
    </div>
  );
};

export default Task;
