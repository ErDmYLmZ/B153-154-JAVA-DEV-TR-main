import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = (new Date()).getFullYear();
  return (
    <footer>
        &copy; {currentYear} - Copyright by Techproeducation | <Link to="/">Home</Link> - <Link to="/countries">Countries</Link>
    </footer>
  )
}

export default Footer