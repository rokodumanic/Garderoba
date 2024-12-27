import { useState } from "react";

function Filteri({addFilter}){

  const filter = [ "T-Shirt", "Kosulja", "Jaketa", "Rebe", "Tuta", "Hoodica"]
  const [data, setData]= useState("");

  function handleInputChange(e){
    const { name, value } = e.target;
    if(value!=data)
     setData(value);
    else setData("");
    addFilter(value);
  }

    return(
        <div className="filterContainer">
            <label className="filterLabel">
            Filteri:
            {filter.map(eachFilter => (
              <label key={eachFilter}>
                <input
                className="filterInput"
                  type='radio'
                  name='filter'
                  value={eachFilter}
                  checked={data === eachFilter}
                  onClick={(e)=>handleInputChange(e)}
                />{" "}
                {eachFilter}
              </label>
            ))}
            </label>
        </div>
    );
}

export default Filteri;