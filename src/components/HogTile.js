import React, { useState } from "react";
import HogDetails from "./HogDetails";

function HogTile({ hog }) {

    const [visibleDetails, setVisibleDetails] = useState(false);

    function handleClick() {
        setVisibleDetails(!visibleDetails); //this toggles detail display
    }

    return(
        <div className="ui eight wide column">
            <h1>{hog.name}</h1>
            <img onClick={handleClick} height="200" width="200" src={hog.image}></img>
            {visibleDetails ? <HogDetails hog={hog} /> : ""}
        </div>
    )
}

export default HogTile;