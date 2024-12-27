import { useContext } from "react";
import EditContext from "./editContext";

function EditForm(){

    const tip = ["T-Shirt", "Kosulja", "Jaketa", "Rebe", "Tuta", "Hoodica"]
    const velicine = ["XS", "S", "M", "L", "XL"];
    const data = useContext(EditContext);
   

    function saljiPodatke(e){
       e.preventDefault();
       console.log("saljiPodatke",data);
       if (data.kontekst.boja != "" && data.kontekst.tip != "" && data.kontekst.velicina != ""){
           save(data, "edit");
       }
    };
   
    function handleInputChange(e){
       const { name, value } = e.target;
        data.setKontekst({ ...data.kontekst, [name]: value });
    }
   

return (
    <form onSubmit={()=>console.log("JAAAAAAAYYYYYY")}>
    <div className="addRobaForm">
    <label>
          Tip:
          <select
            name='kategorija'
            value={data.kontekst.kategorija}
            onChange={(e)=>handleInputChange(e)}
            className="addSelect"
            required
          >
          
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
            value={data.kontekst.velicina}
            onChange={(e)=>handleInputChange(e)}
            className="addSelect"
            required
          >
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
                value={data.kontekst.boja}
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
                value={data.kontekst.marka}
                onChange={(e)=>handleInputChange(e)}
                className="addInput"
            />
        </label>
        <label>
            Slika:
            <input
                type='text'
                name='slika'
                value={data.kontekst.slika}
                onChange={(e)=>handleInputChange(e)}
                className="addInput"
            />
        </label>
    </div>
    </form>
   );
   
}

export default EditForm;
