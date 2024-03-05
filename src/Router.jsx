import { Outlet, RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import Error from "./error";
import FullBlog from "./Components/BlogDetail/fullblog";
import Login from "./Components/login";
import Signup from "./Components/signup";


export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            error: <Error />
        },
        {
            path: '/blog/:id',
            element: <FullBlog />,
            error: <Error />
        },
        {
            path: '/login',
            element: <Login />,
            error: <Error />
        },
        {
            path: '/signup',
            element: <Signup/>,
            error: <Error />
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}