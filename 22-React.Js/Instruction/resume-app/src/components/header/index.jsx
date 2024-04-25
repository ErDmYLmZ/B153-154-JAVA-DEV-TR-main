import React from 'react'
import Avatar from './avatar'
import MobileMenu from './mobile-menu'
import "./style.css";
import Name from './name';
import SocialIcons from './social-icons';
import MainNav from './main-nav';
import Copyright from './copyright';
import { useStore } from '../../store';
const Header = () => {
  const { isMenuOpen } = useStore();
  return (
    <header className={`header pull-left ${isMenuOpen ? "pushed": ""}`}>
        <MobileMenu/>
        <Avatar/>
        <Name/>
        <SocialIcons/>
        <MainNav/>
        <Copyright/>
    </header>
  )
}

export default Header