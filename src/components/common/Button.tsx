import React, { ReactNode } from "react";

enum Variant {
  BLUE = 1,
}
enum Size {
  SMALL = 1,
}
const SIZE_MAPS: Record<Size, string> = {
  [Size.SMALL]: "mr-1 px-3 py-1.5 text-sm my-2",
};
const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.BLUE]: "bg-sky-600 hover:bg-sky-500 text-white",
};

type Props = {
  variant: Variant;
  children?: ReactNode;
  size: Size;
};

export default function Button(
  props: Props & React.ComponentPropsWithoutRef<"button">
) {
  const { children, variant, size, ...rest } = props;

  const getClassname = () => {
    return `rounded-md  ${SIZE_MAPS[size]} ${VARIANT_MAPS[variant]}`;
  };

  return (
    <button className={getClassname()} {...rest}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  variant: Variant.BLUE,
  size: Size.SMALL,
};
