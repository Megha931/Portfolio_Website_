import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Megha</span><br />Software Developer</span>
                <p className='introPara'>
                   Pursuing a B.Tech at Indira Gandhi Delhi Technical University for Women. Proficient in both frontend and backend development.Delve into my portfolio to witness my skills. Click "Hire Me" to collaborate or "Contact Me" to connect. Your visit is appreciated!
                </p>
                <Link to="contact" smooth={true} duration={500}>
                    <button className='btn'>
                        <img src={btnImg} alt="Hire" className='btnImg' />Hire Me
                    </button>
                </Link>
            </div>
            <img src={bg} alt='Profile' className='bg' />
        </section>
    );
}

export default Intro;
