import { useState } from "react";

const Popup = (props) => {
    const [popup, setPopup] = useState(false);
    const togglePopup = () => {
        setPopup(!popup);
    }
    togglePopup();
    return (
        <div>
            <div className="bg-slate-900/10 m-auto w-full">
                <div className="bg-slate-300/10 m-auto w-1/3">
                    <p>Some Error occured!</p>
                    <button onClick={togglePopup}>Popup</button>
                </div>
            </div>
            
        </div>
        
    )
}
export default Popup;