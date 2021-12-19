import React from "react";

const GeneralLayout = ({children}) => {
    return (
        <div id="generalLayout" className="grid grid-rows-1 grid-cols-12">
            {children}
            
        </div>
    )
}
    
export default GeneralLayout;