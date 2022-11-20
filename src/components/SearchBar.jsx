//import onSearch  from "../App";

export default function SearchBar(props) {
   const { onSearch } = props
   return (
      <div>
         <input type = 'search' />
      <button onClick = {() => onSearch ('Id del Personaje')}> Agregar </button>
      </div>
   );
}
