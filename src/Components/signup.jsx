import axios from 'axios';
import styles from './login.module.sass'
import Navbar from "./Nav";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from './Reducers/usersReducer';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${import.meta.env.VITE_URL}/signup`, { userName: username, password: password })
            .then(res => {
                dispatch(signIn(username))
                localStorage.setItem('token', res.data.token)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.login}>
                <h1>Signup</h1>
                <form method='POST' onSubmit={handleSubmit}>
                    <div className="unContainer">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="userName" required minLength={1} value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                    <div className="pwContainer">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required minLength={4} value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </main>
    )
}