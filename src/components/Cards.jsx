import Card from './Card';

export default function Cards(props) {
   const { characters, onClose } = props;
   //console.log(characters)
   return (<div>
      { characters.map((char) => (
               <Card 
               key = {char.id}
               id={char.id}
               name = {char.name}
               species = {char.species}
               gender = {char.gender}
               image = {char.image}
               onClose = {() => onClose(char.id)}
               />
            )
         )
      }
   </div>);
}
