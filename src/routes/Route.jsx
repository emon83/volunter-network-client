import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Admin from "../Pages/Admin/Admin";
import Donation from "../Pages/Donation/Donation";
import Events from "../Pages/Events/Events";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/', 
            element: <Home/>,
        },
        {
            path: '/donation', 
            element: <Donation/>,
        },
        {
            path: '/events', 
            element: <Events/>,
        },
        {
            path: '/blog', 
            element: <Blog/>,
        },
        {
            path: '/signUp', 
            element: <SignUp/>,
        },
        {
            path: '/login', 
            element: <Login/>,
        },
        {
            path: '/admin', 
            element: <Admin/>,
        },
      ]
    },
  ]);

export default router;