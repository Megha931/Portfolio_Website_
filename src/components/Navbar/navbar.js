import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactIcon from '../../assets/contact.png'; // Adjust the path as necessary
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="logo" className='logo' />
            <div className="desktopMenu">
                <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to="aboutSection" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
                <Link activeClass='active' to="experience" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Experience</Link>
                <Link activeClass='active' to="techstackSection" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>TechStack</Link>
                <Link activeClass='active' to="works" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Projects</Link>
            </div>
            <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuBtn">
                <img src={contactIcon} alt="contact icon" className="contactIcon" />
                Contact Me
            </Link>
        </nav>
    );
}

export default Navbar;
