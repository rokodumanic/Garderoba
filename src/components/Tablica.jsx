import { useContext, useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Edit from "./Edit";
import EditForm from "./EditForm";
import EditContext from "./editContext";


function Tablica({roba, filter}){
    const [imageUrls, setImageUrls] = useState([]);
    const [isEditVisible, setEditVis] = useState(false);
    const indexRef = useRef(-1);
    const editContext = useContext(EditContext);



   useEffect(() => {
    const fetchImages = async () => {
      const urls = await Promise.all(
        roba.map(async item => {
          try {
            const { default: imageUrl } = await import(`../images/${item.slika}`);
            return imageUrl;
          } catch (error) {
            console.error("Error importing image:", error);
            throw error;
          }
        })
      );
      setImageUrls(urls);
    };

    fetchImages();
  }, [roba]);

  useEffect(()=>{
    if(indexRef.current==-1){
      setEditVis(false);
    }else{
      setEditVis(true);
    }
  },[indexRef.current])

  const isOpen = () => {

    if(indexRef.current==-1){
      return false;
    } else {
      return true;
    }
  }

  function openEditModal(index){
    editContext.setKontekst({ ...roba[index], index:index});
    indexRef.current=index;
    setEditVis(true);

  };

  function closeEditModal(){
    indexRef.current=-1;
    setEditVis(false);

  };

    return (
      <div>
      {isEditVisible=== true ? 
          
            <Edit
              isOpen={()=>isOpen()}
              onClose={()=>closeEditModal()}
            />
           : null}


        <table className="tablica">
        
          <thead>
            <tr>
            <th>Tip</th>
              <th>Velicina</th>
              <th>Boja</th>
              <th>Marka</th>
              <th>Slika</th>
            </tr>
          </thead>
          <tbody>
          {roba && roba.length > 0 ? (
            roba.map((item, index) => (
              <tr key={index}>
                <td>{item.kategorija}</td>
                <td>{item.velicina}</td>
                <td>{item.boja}</td>
                <td>{item.marka}</td> 
                <td>{imageUrls[index] && (
                  <img
                    src={imageUrls[index]}
                    alt={`Image ${index + 1}`}
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                  />
                )}</td>
                 <td><Button onClick={()=>{openEditModal(index)}}>Uredi</Button>
                </td>
                 </tr> 
            ))
              ) : (
                <tr>
                  <td colSpan="4">No data available</td>
                </tr>
            )}
          </tbody>
        </table>

        </div>
    );
}

export default Tablica;