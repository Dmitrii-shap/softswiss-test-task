import {FC, ReactNode} from "react";

import "./sub-header.scss";

interface TextProps {
    children: ReactNode;
}

export const SubHeader: FC<TextProps> = ({children}) => {
  return <h2 className="sub-header">{children}</h2>
}
