import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props extends React.ComponentPropsWithoutRef<"textarea"> {
  register: UseFormRegisterReturn;
}

const Textarea = ({ register, ...rest }: Props) => {
  return (
    <textarea
      className={`block bg-gray-200 border-2 rounded-sm p-2 w-full md:w-1/2`}
      {...rest}
      {...register}
    ></textarea>
  );
};
export default Textarea;
