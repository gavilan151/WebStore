import { useParams } from "react-router";

export default function Detalle() {
   const { id } = useParams();
   console.log(id);
  return (
  
    <div>Detalle</div>
  )
}
