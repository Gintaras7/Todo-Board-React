import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props extends React.ComponentPropsWithoutRef<"input"> {
  register?: UseFormRegisterReturn;
}

const TextField = ({ register, ...rest }: Props) => {
  return (
    <input
      className={`block bg-gray-200 border-2 rounded-sm p-2 w-full md:w-1/2`}
      {...rest}
      {...register}
    ></input>
  );
};

export default TextField;
