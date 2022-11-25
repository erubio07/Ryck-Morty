import Card from './Card';

export default function Cards(props) {
   const { characters, onClose } = props;
   //console.log(characters)
   return (<div>
      {
         characters.map(characters => (
               <Card 
               key = {characters.name}
               name = {characters.name}
               species = {characters.species}
               gender = {characters.gender}
               image = {characters.image}
               onClose = {() => onClose(characters.id)}
               />
            )
         )
      }
   </div>);
}
