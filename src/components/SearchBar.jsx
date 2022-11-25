//import onSearch  from "../App";
import { useState } from "react";

export default function SearchBar(props) {
   const { onSearch } = props
   const [character, setCharacter] = useState("")
   const handleChange = (e) => {
      setCharacter(e.target.value)
   } // captura lo que se ingresa en el input y se lo pasa a onChange

   return (
      <div>
         <input type = 'search' value={character} onChange={handleChange}/>
      <button onClick = {() => onSearch (character)}> Agregar </button>
      </div>
   );
}
