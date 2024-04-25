import React from 'react'
import "./style.css";
import About from './about';
import Experiences from './experiences';
import Education from './education';
import Testimonals from './testimonals';
import GetInTouch from './get-in-touch';
import { useStore } from '../../store';

const Main = () => {
  const { isMenuOpen } = useStore();
  return (
    <div className={`main-content pull-right  ${isMenuOpen ? "main-pushed": ""}`}>
      <About/>
      <Experiences/>
      <Education/>
      <Testimonals/>
      <GetInTouch/>
    </div>
  )
}

export default Main