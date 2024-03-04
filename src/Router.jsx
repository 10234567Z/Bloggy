import { Outlet, RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import Error from "./error";
import FullBlog from "./Components/BlogDetail/fullblog";


export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            error: <Error />
        },
        {
            path: '/blog/:id',
            element: <FullBlog/>,
            error: <Error />
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}