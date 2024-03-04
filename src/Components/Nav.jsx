import { Link } from 'react-router-dom'
import './navbar.sass'

export default function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'} style={{ textDecoration: "none"}}>
                            <h1>Bloggy</h1>
                        </Link>
                    </li>
                    <ul>
                        <li>
                            <h3>Create</h3>
                        </li>
                        <li>
                            <h3>Login</h3>
                        </li>
                        <li>
                            <h3>Register</h3>
                        </li>
                    </ul>
                </ul>
            </nav>
        </>
    )
}