import React, { Component } from "react";
import Banner from "../components/Banner";

function Loading(){

    const style={
        h1:{
            color:'white',
            fontWeight:"bold",
            justifyContent: 'center', 
            alignItems: 'center'
        },
        footer:{
            color:'white'
        },
        main:{
            backgroundColor:"#2F4858",
            height:"100vh",
            justifyContent: 'center', 
            alignItems: 'center'
        },
       

    }

    return(
        <div className=" container text-center" style={style.main}>
            <div id="CENTER" >
                <h1 style={style.h1}>EASYLIST</h1>
            </div>
           <div style={style.footer}>
               @easylist
           </div>
            
        </div>
    );
}
export default Loading;