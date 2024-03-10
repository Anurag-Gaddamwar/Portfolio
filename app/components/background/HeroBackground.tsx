import React from "react";

const HeroBackground: React.FC = () => {
    return (
        <div className="absolute inset-0">
            <video className="h-full w-full object-cover" autoPlay={true} playsInline={true} loop muted preload="auto">
               
            </video>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-dark-start to-dark-end"></div>

        </div>
    );
};

export default HeroBackground;
