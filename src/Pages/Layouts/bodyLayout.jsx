import React from "react";

const BodyLayout = ({children}) => {
    return (
        <div className="w-100 col-start-4 col-end-12 h-screen">
            {children}
        </div>
    )
}
    
export default BodyLayout;