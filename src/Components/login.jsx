import axios from "axios";
import Navbar from "./Nav";
import styles from './login.module.sass'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "./Reducers/usersReducer";
import { useNavigate } from "react-router-dom";
import Popup from "../popup";

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [show , setShow] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${import.meta.env.VITE_URL}/login`, { userName: username, password: password })
            .then(res => {
                dispatch(signIn(username))
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('username', username)
                navigate('/')
            })
            .catch(err => {
                setError(err.response.data.msg)
                setShow(true)
            })
    }
    return (
        <main className={styles.main}>
            <Popup message={error} show={show} setShow={() => setShow(!show)} close={() => setError(null)} />
            <Navbar />
            <div className={styles.login}>
                <h1>Login</h1>
                <form method="POST" onSubmit={handleSubmit}>
                    <div className="unContainer">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="userName" required minLength={1} value={username} onChange={e => setUsername(e.target.value)}></input>
                    </div>
                    <div className="pwContainer">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required minLength={1} value={password} onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </main>
    )
}