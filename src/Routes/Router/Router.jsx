import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Home from "../../Pages/Home/Home/Home";
import Skills from "../../Pages/Home/Skills/Skills";

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
            path: '/skill',
            element: <Skills></Skills>
         }
        ]
    }
])