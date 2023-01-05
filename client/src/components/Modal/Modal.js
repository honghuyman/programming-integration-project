import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
    const[popup,setPop]=useState(false);
    const handleClickOpen=()=>{
        setPop(!popup);
    }
    const closePopup=()=>{
        setPop(false);
    }
    return (
        <div className="Modal">
            <button onClick={handleClickOpen}>Open popup</button>
            <div>
                {popup?
                <div className="main">
                    <div className="popup">
                        <div className="popup-header">
                            <h1 onClick={closePopup}>X</h1>
                        </div>
                        <div>
                            <p>This is a simple popup in reactjs.....</p>
                        </div>
                    </div>
                </div>:""}
            </div>
        </div>
    );
}
