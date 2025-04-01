import {FC} from "react";

import rocket from "../../assets/icons/rocket.svg";

import "./footer.scss";

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <img className="footer__image" src={rocket} alt=""/>
      <div className="footer__text">Exciting space adventure!</div>
    </footer>
  )
}
