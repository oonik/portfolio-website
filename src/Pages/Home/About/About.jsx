import web from '../../../assets/Header-svg/undraw_web_developer_re_h7ie.svg'

const About = () => {
    return (
        <div className='md:mt-10 lg:m-10'>
            <div className="hero ">
                <div className="hero-content flex-col md:flex-row-reverse lg:flex-row gap-10">
                    <img src={web} className='w-80' />
                    <div className='lg:w-1/2'>
                        <h1 className="text-3xl lg:text-5xl font-bold text-sky-600">About Me</h1>
                        <p className="py-6 text-white">I am a passionate Full Stack web developer with strong foundational skills in HTML, CSS, JavaScript, and hands-on experience in MongoDB, Express.js, React.js, and Node.js. I'm Quick learner, adaptable, and problem-solver, eager to contribute to dynamic development projects. Seeking collaborative opportunities to learn, grow, and contribute to innovative web solutions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;