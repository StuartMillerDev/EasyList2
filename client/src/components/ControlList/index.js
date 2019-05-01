import React from "react";
import axios from "axios";
import RoundButton from "../RoundButton";

function ControlList(props){
    const style={
        button:{
            
        }
    }

  

    return(
        <div className="container text-center">
            <div className="row"> 
                <div id="currentLists">
                    <ul class="list-group">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
                <div id="">
                    LIST CONTROL BUTTONS HERE
                </div>
            </div>    
            <div className="row">
                USER CONTROLS HERE
                <RoundButton text={""} style={style.button} />
            </div>
        </div>
    );



}

export default ControlList;