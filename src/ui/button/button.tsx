import {ButtonHTMLAttributes, ComponentProps, ElementType} from "react";
import classNames from "classnames";

import "./button.scss";

interface ButtonOwnProps<TElement extends ElementType = "button"> extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "link";
  tag?: TElement;
}

export type ButtonProps<TElement extends ElementType> = ButtonOwnProps<TElement> &
    Omit<ComponentProps<TElement>, keyof ButtonOwnProps>;

export const Button = <TElement extends ElementType = "button">({className, variant, children, tag, ...props}: ButtonProps<TElement>) => {
  const Tag = tag || "button";
  return (
    <Tag {...props} className={classNames(className, "button", `button__${variant}`)}>
      {children}
    </Tag>
  )
}
