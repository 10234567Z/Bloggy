import "./Components/popup.sass"

export default function Popup({message, show , setShow , close}) {
    return (
        <div className={`Popup ${show === true ? "show" : ""}`}>
            <div className="PopupContent">
                <p>{message}</p>
                <button onClick={() => {setShow(false); close();}}>Close</button>
            </div>
        </div>
    )
}