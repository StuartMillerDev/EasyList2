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
                <div id="controlButtons">
                    <RoundButton className="btn btn-primary rounded-circle"  text="OPEN" />
                    <RoundButton className="btn btn-primary rounded-circle"  text="EDIT" />
                    <RoundButton className="btn btn-primary rounded-circle"  text="ADD PEOPLE" />
                    <RoundButton className="btn btn-danger rounded-circle"  text="DELETE" />
                </div>
            </div>    
            <div className="row">
                <div className="col-med-12">
                <RoundButton className="btn btn-primary rounded-circle"  text="DELETE" />
                <RoundButton className="btn btn-primary rounded-circle"  text="DELETE" />
                <RoundButton className="btn btn-secondary rounded-circle"  text="LOGOUT" />
                <RoundButton className="btn btn-warning rounded-circle"  text="ACCOUNT" />
                </div>
            </div>
        </div>
    );



}

export default ControlList;