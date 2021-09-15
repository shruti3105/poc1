import React from "react";
import Comment from "./Comment";
import Expand from "./Expand";
import TCMicon from "./TCMicon";

export const RightPanel = () => {
    return(
        <div className="right" style={{backgroundColor: "lightgreen"}}>
             <Comment />
             <TCMicon />
             <Expand />
        </div>
    );
}