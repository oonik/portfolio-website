import About from "../About/About";
import ContactMe from "../ContactMe/ContactMe";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;