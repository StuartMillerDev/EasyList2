import React from "react";

function RoundButton(props){

    return(
        <div className="rounded-circle">
            {props.text}
        </div>
    );

}

export default RoundButton;