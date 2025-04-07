import React from "react";

export const ButtonClock = (props) => {


    return (
        <div className="col-lg-3 col-md-6 col-sm-12 m-3">
            <button disabled = {props.disabled} className={`btn px-4 py-2 btn-${props.type}`} onClick={props.event}>
{props.text}
            </button>        
        </div>
    )
}