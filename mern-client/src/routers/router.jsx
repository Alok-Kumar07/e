import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../home/home";
import Shop from "../Shop/Shop";
import About from "../Components/About";
import Blog from "../Components/Blog";
import SingleBook from "../Shop/SingleBook";
import DashboardLayout from "../Deshboard/DashboardLayout";
import Dashboard from "../Deshboard/Dashboard";
import UploadBook from "../Deshboard/UploadBook";
import ManageBook from "../Deshboard/ManageBook";
import EditBooks from "../Deshboard/EditBooks";
import Signup from "../Components/Signup";
import Login from "../Components/Login";
import Privateroute from "../PrivateRoute/Privateroute";
import Logout from "../Components/Logout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path:'/shop',
            element:<Shop/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'blog',
            element:<Blog/>
        },
        // {
        //     path:'singlebook',
        //     element:<SingleBook/>
        // },
        {
            path:'/book/:id',
            element:<SingleBook/>,
            loader: ({params}) => fetch(`https://mern-bookshop.onrender.com/book/${params.id}`)
        }
      ]
    },
    {
        path:"/admin/dashboard",
        element:<DashboardLayout/>,
        children: [
            {
                path:"/admin/dashboard",
                element: <Privateroute><Dashboard/></Privateroute>
            },
            {
                path:"/admin/dashboard/upload",
                element:<UploadBook/>
            },
            {
                path:"/admin/dashboard/manage",
                element:<ManageBook/>
            },
            {
                path:"/admin/dashboard/edit-books/:id",
                element:<EditBooks/>,
                loader: ({params}) => fetch(`https://mern-bookshop.onrender.com/book/${params.id}`)
            }
        ]
    },
    {
        path:"sign-up",
        element:<Signup/>
    },
    {
        path:"login",
        element:<Login/>
    },
    {
        path:"logout",
        element:<Logout/>
    }
  ]);

  export default router;
