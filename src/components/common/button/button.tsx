import { FC } from "react";
import { ChildrenProps } from "../../../types";
import { ButtonProps } from "./types";

export const Button: FC<ChildrenProps & ButtonProps> = ({
  children,
  variant = "filled",
  styles = "",
}) => {
  let btnStyles = "";
  switch (variant) {
    case "filled":
      btnStyles = "bg-primary text-white rounded-lg";
      break;
    case "outline":
      btnStyles = "border border-primary text-white rounded-lg";
      break;
    case "text":
      btnStyles = "text-primary";
      break;
    default:
      styles = "border border-primary text-primary rounded-lg";
  }
  return (
    <button
      className={`${styles || btnStyles} py-3 font-bold w-full lg:w-1/4 px-6`}
    >
      {children}
    </button>
  );
};
