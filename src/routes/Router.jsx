import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/news/News/News";
import Loginlayout from "../layout/Loginlayout";
import Login from "../pages/login/Login/Login";
import Register from "../pages/login/resgister/Register";

const router = createBrowserRouter([
        {
                path: '/',
                element:<Loginlayout></Loginlayout>,
                children: [
                        {
                                path:'/',
                                element:<Navigate to = "/category/0"></Navigate>
                        },
                        {
                                path:'login',
                                element:<Login></Login>
                        },
                        {
                                path:'register',
                                element:<Register></Register>
                        }
                ]
        },

        {
                path:'category',
                element:<Main></Main>,
                children: [
                        // {
                        //         path:'/',
                        //         element: <Category></Category>,
                        //         loader: () => fetch("http://localhost:5000/news")
                        // },
                        {
                        path:':id',
                        element:<Category></Category>, 
                        loader : ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
                 
                        }
                ]
        },
        {
                path:'news',
                element:<NewsLayout></NewsLayout>,
                children:[
                        {
                                path:':id',
                                element:<News></News>,
                                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)

                        }
                ]
        }
])
export default router;