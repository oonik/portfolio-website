import web from '../../../assets/Header-svg/undraw_web_developer_re_h7ie.svg'

const About = () => {
    return (
        <div className='lg:m-10'>
            <div className="hero ">
                <div className="hero-content flex-col  lg:flex-row gap-10">
                    <img src={web} className='w-80' />
                    <div className='lg:w-1/2'>
                        <h1 className="text-3xl lg:text-5xl font-bold text-sky-600">About Me</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;