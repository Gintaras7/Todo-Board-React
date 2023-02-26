import { TaskInterface, TaskState } from "./types/taskTypes";
import useTaskTransitions from "./hooks/useTaskTransitions";
import Button from "../common/buttons/Button";

type TaskProps = {
  task: TaskInterface;
  updateTask: (updatedTask: TaskInterface) => any;
};

type TransitionToState = {
  key: number;
  title: string;
};

const Task = ({ task, updateTask }: TaskProps): any => {
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
            <Button key={key} onClick={() => updateState(transition.key)}>
              {transition.title}
            </Button>
          )
        )}
      </div>
    </div>
  );
};

export default Task;
