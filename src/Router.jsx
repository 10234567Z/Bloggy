import { Navigate, Outlet, RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import Error from "./error";
import FullBlog from "./Components/BlogDetail/fullblog";
import Login from "./Components/login";
import Signup from "./Components/signup";
import Logout from "./Components/logout";


export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <Error />
        },
        {
            path: '/blog/:id',
            element: <FullBlog />,
            errorElement: <Error />
        },
        {
            path: '/login',
            element: <Login />,
            errorElement: <Error />
        },
        {
            path: '/signup',
            element: <Signup />,
            errorElement: <Error />
        },
        {
            path: '/logout',
            element: <Logout />,
            errorElement: <Error />
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}