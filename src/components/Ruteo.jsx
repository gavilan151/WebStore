import { Navigate, useRoutes } from "react-router-dom";
import Inicio from "./inicio/Inicio";
import Productos from "./productos/Productos";
import Detalle from "./productos/Detalle";
import SimpleContainer from "./productos/Productos2";



export default function Ruteo({filtro}) {
   let element = useRoutes([
      {
         path:"*",
         element:<Navigate to={"/inicio/Inicio"}/>
      },
      {
         path:"/inicio/Inicio",
         element:<Inicio />,
      },
  
      {
         path:"/productos/Productos",
         element:<Productos filtro={filtro}/>,
      },
      {
         //path:"/productos/Detalle",
         path:":id",
         element:<Detalle/>,
      },
      {
         path:"/productos/Productos2",
         element:<SimpleContainer />,
      },
   ] )
        

  return ( 
    element
  );
}
