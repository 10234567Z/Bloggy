import { Link } from 'react-router-dom'
import './navbar.sass'

export default function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'} style={{ textDecoration: "none" }}>
                            <h1>Bloggy</h1>
                        </Link>
                    </li>
                    <ul>
                        {
                            localStorage.getItem('username') ?
                                <>
                                    <li>
                                        <a href={`https://blogger-orpin-theta.vercel.app/`} style={{ textDecoration: "none" }}>
                                            <h3>Create</h3>
                                        </a>
                                    </li>
                                    <li>
                                        <Link to={'/logout'} style={{ textDecoration: "none" }}>
                                            <h3>Logout</h3>
                                        </Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <Link to={'/login'} style={{ textDecoration: "none" }}>
                                            <h3>Login</h3>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/signup'} style={{ textDecoration: "none" }}>
                                            <h3>Signup</h3>
                                        </Link>
                                    </li>
                                </>
                        }
                    </ul>
                </ul>
            </nav>
        </>
    )
}