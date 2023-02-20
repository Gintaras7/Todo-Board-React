import { useEffect, useState } from "react"
import { TaskState, TaskStateAndTitle, StateTransitionsMap } from "../interfaces/tasks"

interface TransitionToState {
  key: number;
  title: string;
}
const useTaskTransitions = (status: TaskState) => {
  const [allowedTransitionsList, setAllowedTransitions] = useState<TransitionToState[]>([]);

  useEffect(() => {
    const transitions = TaskStateAndTitle().filter((transition: { key: TaskState }) => canTransitState(transition.key));
    setAllowedTransitions(transitions)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const canTransitState = (toState: TaskState): boolean => allowedTransitions().includes(toState)
  const allowedTransitions = (): TaskState[] => StateTransitionsMap()[status];

  return [allowedTransitionsList]
}

export default useTaskTransitions;
