import Navbar from "./Nav";
import styles from './login.module.sass'

export default function Login() {
    return (
        <main className={styles.main}>
            <Navbar/>
            <div className={styles.login}>
                <h1>Login</h1>
                <form>
                    <div className="unContainer">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="userName" required></input>
                    </div>
                    <div className="pwContainer">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required></input>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </main>
    )
}