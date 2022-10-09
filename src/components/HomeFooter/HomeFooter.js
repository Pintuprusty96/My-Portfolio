import React from 'react';
import './HomeFooter.css';
import github from '../../assets/gitLogo1.png';
import linkedin from '../../assets/li.png';


const HomeFooter = () => {
    return (
        <div className="home-footer">
            <div className='container'>
                <div className="left-footer">
                    <h1 className='my-name'>Aditya Kumar</h1>
                    <p className="my-details">A dedicated Front End Developer looking for challenging opportunities which could help in enhancing my skills.</p>
                </div>

                <div className="right-footer">
                    <div className="social-media">
                        {/* <h2>SOCIAL MEDIA</h2> */}
                        <ul>
                            <li> <a href="https://github.com/adityapal87" target="_blank" rel="noopener"> <img src={github} alt="github" className='github' /> </a> </li>
                            <li> <a href="https://www.linkedin.com/in/aditya-pal-526121233/" target="_blank" rel="noopener"><img src={linkedin} alt="linkedin" className='linkedin' /></a> </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="copyright">
                <div class="copyright-section">© {new Date().getFullYear()} - Aditya Kumar</div>
            </div>
        </div>
    );
};
export default HomeFooter;
