import React from "react";
import Label from "./Label";
import Delete from "./Delete";
import "./LeftPanel.css"

export const LeftPanel = () => {
    return(
        <div className="left">
             <Label />
             <Delete />
        </div>
    );
}