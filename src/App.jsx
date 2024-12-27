import "./App.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Tablica from "./components/Tablica";
import DodajRobu from "./components/dodajRobu";
import Filteri from "./components/Filteri";
import EditContext from "./components/editContext";


function App() {
   const [kontekst, setKontekst] = useState({});

 const [data, setData] = useState([]);
 const [filterI, setFilter] = useState("");
 useEffect(() => {
 axios
 .get("http://localhost:3000/svaRoba/")
 .then(res => setData(res.data));
 }, [filterI]);

 function addFilter(prop){
   if (filterI === prop){
      setFilter("");
   } else{
      setFilter(prop);
   }
 }

 const filterOut = () => {
   if(filterI===""){
      return data;
   } else{
      const filteredData = data.filter(item => item.kategorija === filterI);
      return filteredData;
   }
}


 return (
 <div className='App'>
      <h2 className="headNaslov">Moja garderoba</h2>
   <div className="appContainer">
   <EditContext.Provider value={{ kontekst, setKontekst }}>
      <DodajRobu className="dodajRobu"/>
      <div className="tableFilterContainer">
         <Filteri addFilter={addFilter}/>
         {data.length && <Tablica roba={filterOut()} filter={filterI}/>}
      </div>
   </EditContext.Provider>
   </div>
 </div>
 );
}

export default App;
