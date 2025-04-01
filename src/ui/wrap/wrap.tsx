import {FC, ReactNode} from "react";
import classNames from "classnames";

import "./wrap.scss";

interface WrapProps {
  className?: string;
  children: ReactNode;
}

export const Wrap: FC<WrapProps> = ({className, children}) => {
  return <div className={classNames(className, "app-wrap")}>{children}</div>
}
