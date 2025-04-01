import {FC, ReactNode} from "react";
import classNames from "classnames";
import {Button} from "../button";

import "./card.scss";

interface CardProps {
    type: "big" | "default";
    header: ReactNode;
    text: ReactNode;
    actionClick: () => void;
    image: string;
    className?: string;
}

export const Card: FC<CardProps> = ({text, header, actionClick, image, type = "default", className}) => {

  return (
    <div className={classNames("main-card", className, `main-card--${type}`)} style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(15, 20, 32, 0.79) 100%), url(${image})`}}>
      <div className="main-card__header">{header}</div>
      <div className="main-card__text">{text}</div>
      <div>
        <Button onClick={actionClick} variant='secondary'>Learn more</Button>
      </div>
    </div>
  )
}
