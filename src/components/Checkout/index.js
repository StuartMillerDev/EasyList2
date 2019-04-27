import React from "react";

function Checkout(props){
    const style={
        checkout:{
            background:"#F26419",
            border:15,
            borderColor:'ffffff',
            borderWidth:4
        },
        checkoutHover:{
            background:"red"
        }
    }
    return(

        <div className="btn btn-success btn-block" style={style.checkout}>
        CHECKOUT
        </div>
    );
}

export default Checkout;