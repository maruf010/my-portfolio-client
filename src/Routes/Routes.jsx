import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../components/Projects/ProjectDetails";
import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init();

export const router = createBrowserRouter([
    // Root layout
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/projects/:id",
                element: <ProjectDetails></ProjectDetails>
            },
        ]
    },
]);