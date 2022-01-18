import React from "react";

function HogDetails({ hog }) {
    return (
        <div>
            <h3>{hog.specialty}</h3>
            <h3>{hog.weight}</h3>
            <h3>{hog.greased ? "Is greased" : "Not greased"}</h3>
            <h3>{hog.["highest medal achieved"]}</h3>
        </div>
    )
}

export default HogDetails;