import React from "react";

const Container: React.FC = ({ children }) => {
    return <div className="w-full h-auto">
        {children}
    </div>
};

export default Container;