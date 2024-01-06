import './Header.css';
import { Typewriter } from 'react-simple-typewriter';
import bg from '../../../assets/Header-svg/The Little Things - Working.png';

const Header = () => {
    
    return (
        <div className="hero lg:min-h-screen">
            <div className="hero-content flex-col md:flex-row-reverse lg:flex-row-reverse">
                <img src="https://i.postimg.cc/pdj2dCcZ/Passport-Photo-Maker-643-removebg.png" className="border-b-4 h-60 rounded-full lg:mb-14" />
                <div className="lg:w-1/2" style={{
                    backgroundImage: `url(${bg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <h1 className="text-3xl font-bold text-sky-600">Hello, I'm</h1>
                    <h1 className="text-3xl lg:text-5xl font-bold text-white">
                        ANIK SARKAR <br />
                        <span style={{ color: 'rgb(2, 132, 199)', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['MERN stack Web Developer', 'Specialized in ReactJS']}
                                loop={10}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                    <p className="py-6 text-white">Self-taught programmer with proficiency in MERN stack, solid understanding of JavaScript, HTML and CSS. Committed to continuous learning and staying updated with industry trends. Skilled in creating responsive user interfaces and building RESTful APIs.</p>
                    <button className="btn btn-primary bg-sky-600 border-0 text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Header;