import React from "react";
import { LeftPanel } from "./LeftPanel";
import { RightPanel } from "./RightPanel";
import TinyMce from "./TinyMce";
import "./ElementContainer.css";

export const ElementContainer = () => {
    return <div className="root" style={{backgroundColor: "lightblue"}}>
        <div>
            <LeftPanel />
        </div>
        <div>
            <TinyMce />
        </div>
        <div>
            <RightPanel />
        </div>
    </div>
}