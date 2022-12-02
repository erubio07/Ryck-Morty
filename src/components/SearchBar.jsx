//import onSearch  from "../App";
import { useState } from "react";
import styled from "styled-components";

const ButtonStyle = styled.button `
   padding: .6rem 1rem;
   border: 1px solid #995309;
   border-radius: 4px;
   background-color: #d9750b;
   color: #fff;
   font-size: 15px;
   text-shadow: 0 -1px 0 rgba(0,0,0,.5);
   box-shadow: 0 1px 0 rgba(255,255,255,.5) inset,
   0 1px 3px rgba(0,0,0,.2);
   background-image: -webkit-gradient(linear,left top,left bottom,color-stop(10%,#f90),to(#e76a00));
   background-image: linear-gradient(#f90 10%,#e76a00 100%);
`


export default function SearchBar(props) {
   const { onSearch } = props
   const [character, setCharacter] = useState("")
   const handleChange = (e) => {
      setCharacter(e.target.value)
   } // captura lo que se ingresa en el input y se lo pasa a onChange

   return (
      <div>
         <input type = 'search' value={character} onChange={handleChange}/>
      <ButtonStyle onClick = {() => onSearch (character)}> Agregar </ButtonStyle>
      </div>
   );
}
