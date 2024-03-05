import axios from "axios";
import Navbar from "./Nav";
import styles from './login.module.sass'
import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${import.meta.env.VITE_URL}/login`, { userName: username, password: password })
            .then(res => {
                localStorage.setItem('token', res.data.token)
                window.location.href = '/'
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <main className={styles.main}>
            <Navbar/>
            <div className={styles.login}>
                <h1>Login</h1>
                <form method="POST" onSubmit={handleSubmit}>
                    <div className="unContainer">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="userName" required minLength={1} value={username} onChange={e => setUsername(e.target.value)}></input>
                    </div>
                    <div className="pwContainer">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required minLength={1} onChange={e => setPassword(e.target.value)} value={password}></input>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </main>
    )
}