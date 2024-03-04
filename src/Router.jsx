import { Outlet, RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import Error from "./error";


export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            error: <Error />
        },
    ])

    return (
        <RouterProvider router={router} />
    )
}