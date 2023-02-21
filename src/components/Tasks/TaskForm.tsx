import { TaskState } from "./types/TaskInterfaces";
import { useForm } from "react-hook-form";
import Button from "../common/buttons/Button";
import TextField from "../common/TextField";
import Textarea from "../common/Textarea";

interface TaskFormProps {
  onSave: (event: any) => any;
}

const TaskForm = ({ onSave }: TaskFormProps): JSX.Element => {
  const { register, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      id: "",
      title: "",
      description: "",
      status: TaskState.OPENED,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSave)} className="w-full">
      <label>Title</label>
      <TextField
        id="title"
        register={register("title", {
          required: true,
        })}
      />
      <label className="mt-2 block">Description</label>
      <Textarea
        id="description"
        rows={4}
        register={register("description", {
          required: "Required",
        })}
      ></Textarea>
      <Button type="submit">Save</Button>
    </form>
  );
};

export default TaskForm;
