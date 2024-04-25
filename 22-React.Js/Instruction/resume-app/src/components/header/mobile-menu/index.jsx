import React, { useContext } from "react";
import "./style.css";
import { useStore } from "../../../store";
const MobileMenu = () => {
  const { setIsMenuOpen } = useStore();
  return (
    <div className="mobile-bar visible-sm visible-xs">
      <div className="hamburger-menu" onClick={()=> setIsMenuOpen(prev=> !prev)}>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default MobileMenu;
