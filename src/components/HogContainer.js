import React, { useState } from "react";
import HogTile from "./HogTile";

function HogContainer({ hogs }) {
    const [filteredByGreased, setFilteredByGreased] = useState(false);
    const [myHogs, setMyHogs] = useState(hogs); //used to see hogs after filtering
    const [sortedByName, setSortedByName] = useState(false); //used to see hogs after sorting

    function handleFilter(event){
        

        if (event.target.checked) {
        
            const hogsFiltered = myHogs.filter( hog => {
                return hog.greased === true
            })
            setMyHogs(hogsFiltered)
            }
        else 
            setMyHogs(hogs)
        }

    function handleSort(event) {
        setSortedByName(!sortedByName);

        if (event.target.checked) {
            const sortedHogs = myHogs.slice().sort( (a,b) => {
                if(a.name < b.name) return -1
                if(a.name > b.name) return 1
                return 0
            })
            setMyHogs(sortedHogs)
        }
        else
            setMyHogs(hogs)
    }
    
    return(
        <div className="ui grid container">
            <div>
                Only greased pigs: 
                <input onClick={handleFilter} type="checkbox" id="filter"></input>
            </div>
            <div>
                Sort by name: 
                <input onClick={handleSort} type="checkbox" id="sort"></input>
            </div>
            {myHogs.map((hog) => <HogTile hog={hog} /> )}
        </div>
    )
}

export default HogContainer;


// function handleSortByWeight (e){
//     if(e.target.checked) {
//         let sortWeight = hogData.slice().sort((a,b) => {
//             return a.weight - b.weight
//         })
//         setHogData(sortWeight)
//     }
//     else setHogData(hogs)
// }