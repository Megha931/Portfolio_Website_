import React, { useState } from 'react';
import './experience.css';
import golokaLogo from '../../assets/goloka.jpeg';
import aspireLogo from '../../assets/aspire.png';

const Experience = () => {
    const [showMore, setShowMore] = useState({ goloka: false, aspire: false });
    const [message, setMessage] = useState('');

    const toggleShowMore = (company) => {
        setShowMore((prev) => ({ ...prev, [company]: !prev[company] }));
    };

    const handleGolokaCertificate = () => {
        setMessage('Currently ongoing internship, certificate yet to receive.');
        setTimeout(() => setMessage(''), 3000); // Message disappears after 3 seconds
    };

    const handleAspireCertificate = () => {
        window.open('https://drive.google.com/file/d/10FHCZi9IsZTZJJjA6gxg7i4Rwn_Jyul6/view?usp=sharing', '_blank');
    };

    return (
        <section id="experience" className="experience-section">
            <h2 className="section-title">Experience</h2>
            <div className="experience-container">
                {/* GolokaIT Experience Card */}
                <div className="experience-card">
                    <img src={golokaLogo} alt="GolokaIT Logo" className="company-logo-large" />
                    <div className="experience-info">
                        <h3 className="job-title">Full Stack Web Developer Intern</h3>
                        <p className="company-name">GolokaIT</p>
                        <p className="duration">Aug’22 - Present</p>
                        <button className="action-btn" onClick={() => toggleShowMore('goloka')}>
                            {showMore.goloka ? 'Read Less' : 'Read More'}
                        </button>
                        <button className="action-btn" onClick={handleGolokaCertificate}>
                            Download Certificate
                        </button>
                        {message && <p className="more-info">{message}</p>}
                        {showMore.goloka && (
                            <div className="more-info">
                                <p>Gained hands-on experience in full stack development with React.js, JavaScript, HTML/CSS, XML, Java, Spring Boot, SQL, and MongoDB. Contributed to a career page project with admin features, enhancing both frontend and backend user experiences.</p>
                                <p><strong>Skills:</strong> React.js, JavaScript, Java, Spring Boot, SQL, MongoDB</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* AspireNex Experience Card */}
                <div className="experience-card">
                    <img src={aspireLogo} alt="AspireNex Logo" className="company-logo-large" />
                    <div className="experience-info">
                        <h3 className="job-title">Web Development Intern</h3>
                        <p className="company-name">AspireNex</p>
                        <p className="duration">Mar’23 - May’23</p>
                        <button className="action-btn" onClick={() => toggleShowMore('aspire')}>
                            {showMore.aspire ? 'Read Less' : 'Read More'}
                        </button>
                        <button className="action-btn" onClick={handleAspireCertificate}>
                            Download Certificate
                        </button>
                        {showMore.aspire && (
                            <div className="more-info">
                                <p>Worked on a Blog Application with CRUD, user authentication, and responsive UI using the MERN stack. Developed scalable web applications using Node.js, Express.js, React, and MongoDB.</p>
                                <p><strong>Skills:</strong> Node.js, Express.js, React, MongoDB, SQL, Bootstrap</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
