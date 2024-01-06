import { Link } from "react-router-dom";
import pdf from '../../../public/Resume_Anik (1).pdf';
import logo from '../../assets/Red_Purple_Modern_Minimalist_Initial_AS_Letter_Logo-removebg-preview.png'

const Navbar = () => {
    const menuItems = <>
      <li className="text-lg text-white"><Link to='/'>Home</Link></li>
      <li className="text-lg text-white"><Link to='/skill'>Skills</Link></li>
      <li className="text-lg text-white"><Link to='/about'>About</Link></li>
      <li className="text-lg text-white"><Link to='/project'>Project</Link></li>
    </>
    return (
        <div className="navbar bg-sky-600 h-12 sticky top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-sky-400 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <img src={logo} alt="" className="w-32 h-28 mt-1" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
            <a
                        className="btn btn-primary bg-white border-0 text-sky-500"
                        href={pdf}
                        download="Resume_Anik(1).pdf"
                        target="_blank"
                        rel="noreferrer"
                    >Resume</a>
            </div>
        </div>
    );
};

export default Navbar;