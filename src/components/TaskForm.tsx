import React, { FC } from "react";
import { TaskState } from "../interfaces/tasks";
import { useForm } from "react-hook-form";
import Button from "./common/Button";
import TextField from "./common/TextField";
import Teaxtarea from "./common/Textarea";

interface TaskFormProps {
  onSave: (event: any) => any;
}

const TaskForm: FC<TaskFormProps> = ({ onSave }): JSX.Element => {
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
      <Teaxtarea
        id="description"
        rows={4}
        register={register("description", {
          required: true,
        })}
      ></Teaxtarea>
      <Button type="submit">Save</Button>
    </form>
  );
};

export default TaskForm;
