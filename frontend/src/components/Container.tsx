import React from "react";
//import List from "./List";
function Container(props:any){
    return(
    <div className="Container">
        {props.children}
    </div>
    )
}

export default Container