import React, { ReactNode } from "react";
import { Size, Variant, SIZE_MAPS, VARIANT_MAPS } from "./buttonCustimizations";

type Props = {
  variant: Variant;
  children?: ReactNode;
  size: Size;
};

export default function Button(
  props: Props & React.ComponentPropsWithoutRef<"button">
) {
  const { children, variant, size, ...rest } = props;

  const getClassName = () => {
    return `rounded-md  ${SIZE_MAPS[size]} ${VARIANT_MAPS[variant]}`;
  };

  return (
    <button className={getClassName()} {...rest}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  variant: Variant.BLUE,
  size: Size.SMALL,
};
