import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "./Reducers/usersReducer";

export default function Logout(){
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        dispatch(signOut())
        navigate('/')
    }, [navigate])

    return <></>
}