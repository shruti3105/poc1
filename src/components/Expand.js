import React from 'react';
import ExpandIcon from "./images/Expand.webp";
import "./Expand.css";

const Expand = () => {

    const page = () => {
        let path = "https://reactjs.org/";
        window.open(path);
    }
    return(
        <div>
        <button onClick={page}><img src={ExpandIcon} className="expand" /></button>
        </div>
    );
}
export default Expand;