import { Link, useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError()
    console.log(error)
    return (
        <>
            <h1>Ah!..Seems like an error now</h1>
            <Link to="/">
                <h3>Click here to go to home page</h3>
            </Link>
        </>
    )
}