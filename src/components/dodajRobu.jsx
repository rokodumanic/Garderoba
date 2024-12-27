import { useState } from "react";
import save from "./Save";
import Button from 'react-bootstrap/Button';

function DodajRobu() {
 const tip = ["T-Shirt", "Kosulja", "Jaketa", "Rebe", "Tuta", "Hoodica"]
 const velicine = ["XS", "S", "M", "L", "XL"];
 const [data, setData] = useState({
    tip: "",
    velicina: "",
    boja: "",
    marka: "",
    slika: ""
    });

 function saljiPodatke(e){
    e.preventDefault();
    console.log("saljiPodatke",data);
    if (data.boja != "" && data.tip != "" && data.velicina != ""){
        save(data, "save");
    }
 };

 function handleInputChange(e){
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
 }

 return (
    <form onSubmit={saljiPodatke}>
    <div className="addRobaForm">
    <label>
          Tip:
          <select
            name='tip'
            value={data.tip}
            onChange={(e)=>handleInputChange(e)}
            className="addSelect"
            required
          >
            <option value=''>--Odaberi tip--</option>
            {tip.map(type => (
              <option key={type} value={type} required>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label>
          Velicina:
          <select
            name='velicina'
            value={data.velicina}
            onChange={(e)=>handleInputChange(e)}
            className="addSelect"
            required
          >
            <option value='' required>--Odaberi velicinu--</option>
            {velicine.map(size => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </label>
        <label>
            Boja:
            <input
                type='text'
                name='boja'
                value={data.boja}
                onChange={(e)=>handleInputChange(e)}
                className="addInput"
                required
            />
        </label>
        <label>
            Marka:
            <input
                type='text'
                name='marka'
                value={data.marka}
                onChange={(e)=>handleInputChange(e)}
                className="addInput"
            />
        </label>
        <label>
            Slika:
             <input
                type='text'
                name='slika'
                value={data.slika}
                onChange={(e)=>handleInputChange(e)}
                className="addInput"
            /> 
        </label>
    </div>
        <Button className="submitButton" type='submit' onClick={(e)=>saljiPodatke(e)}>Save</Button>
    </form>
   );
   
}

export default DodajRobu;
