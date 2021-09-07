import React from "react";
import { LeftPanel } from "./LeftPanel";
import { RightPanel } from "./RightPanel";
import TinyMce from "./TinyMce";

export const ElementContainer = () => {
    return <div>
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