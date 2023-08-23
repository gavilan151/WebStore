import "./App.css";
import { useState } from "react";

import Ruteo from "./components/Ruteo";
import Barra from "./components/barraprincipal/Barra";
//import Inicio from "./components/inicio/Inicio";

//import { Container } from "@mui/material";


function App() {
 
   const [textoFiltrado, setFiltrado] = useState("");
  return (
    <>
    
    <Barra handleSearch = {setFiltrado} />
      <div
        style={{
          height: "80px",
        }}
      ></div>
      {/* <Inicio/> */}
     
      <Ruteo filtro ={textoFiltrado}/>
      
    </>
  );
}

export default App;


