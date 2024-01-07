import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Home from "../../Pages/Home/Home/Home";
import Skills from "../../Pages/Home/Skills/Skills";
import About from "../../Pages/Home/About/About";
import Projects from "../../Pages/Home/Projects/Projects";
import ContactMe from "../../Pages/Home/ContactMe/ContactMe";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/about',
            element: <About></About>
         },
         {
            path: '/skill',
            element: <Skills></Skills>
         },
         {
            path: '/project',
            element: <Projects></Projects>
         },
         {
            path: '/contactMe',
            element: <ContactMe></ContactMe>
         }
        ]
    }
])