import axios from "axios";

function save(data, action){

    function obradiPodatke(){
      if(action==="save"){
        return {
          "kategorija" : data.tip,
          "velicina" : data.velicina,
          "boja": data.boja,
          "marka": data.marka,
          "slika": data.slika
        }
      } else if(action==="edit"){
        return {
          "id": data.id,
          "kategorija" : data.kategorija,
          "velicina" : data.velicina,
          "boja": data.boja,
          "marka": data.marka,
          "slika": data.slika
        }
      }
      }

    
    const zaSlanje = obradiPodatke()
  if(action==="save"){
    axios.post('http://localhost:3001/svaRoba/', zaSlanje)
    .then(rez => console.log(rez));
  } else if(action=="edit"){
    axios.patch("http://localhost:3001/svaRoba/"+zaSlanje.id, zaSlanje)
    .then(rez => console.log(rez))
 }
  

}

export default save;