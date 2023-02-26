import { useMemo } from "react"
import { TaskState, TaskStateAndTitle, StateTransitionsMap } from "../types/taskTypes"

const useTaskTransitions = (status: TaskState) => {

  const allowedTransitionsList = useMemo(() => {
    const canTransit = (toState: TaskState) => StateTransitionsMap()[status].includes(toState)

    return TaskStateAndTitle().filter((transition: { key: TaskState }) => canTransit(transition.key));
  },[status])


  return [allowedTransitionsList]
}

export default useTaskTransitions;
