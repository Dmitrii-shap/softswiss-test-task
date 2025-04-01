import {FC, useState} from "react";
import {Wrap} from "../../ui/wrap";

import crossIcon from "../../assets/icons/cross.svg";
import menuIcon from "../../assets/icons/menu.svg";
import logoIcon from "../../assets/icons/logo.svg";

import "./header.scss";

const MenuList = () => (
  <>
    <li><a href="#">Home</a></li>
    <li><a href="#">Products</a></li>
    <li>
      <a href="#">
        <div className="header__cart-icon"/>
      </a>
    </li>
  </>
)

export const Header: FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileOpen = () => {
    setIsMobileOpen(prev => !prev);
  }

  return (
    <header className="header">
      <Wrap className="header__wrap">
        <div className="header__logo">
          <img src={logoIcon} alt='logo'/>
        </div>
        <div className="header__flexspacer"/>

        <ul className='header__menu header__menu--default'>
          <MenuList />
        </ul>

        <div className="header__mobile-menu">
          <button className="header__mobile-menu-btn" onClick={toggleMobileOpen}>
            <img src={isMobileOpen ? crossIcon : menuIcon} alt=""/>
          </button>
          {isMobileOpen && (
            <ul className='header__menu header__menu--mobile'>
              <MenuList/>
            </ul>
          )}
        </div>
      </Wrap>

    </header>
  );
}
