import React from "react";

function Banner(props){
    const style={
        banner: {
          contentAlign:'center',
          background: "#2F4858",
          borderRadius:10,
          borderWidth: 3,
          borderColor: '#fff',
          color:"white"
        },
        h1:{
            background:"#33CCFF"
        }
    }
    return(
        <div className="Jumbotron" style={style.banner}>
        <h1 style={style.h1}>{props.listName}</h1>
        </div>
    );
}

export default Banner;