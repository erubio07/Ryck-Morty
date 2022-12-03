import styled from "styled-components";
import { Link } from "react-router-dom";


const DivStyle = styled.div `
   display : inline-block;
   color: white;
   background-color: salmon;
   opacity: inherit;
   margin:40px;
   padding:10px ;
   border: 5px solid white;
   border-radius: 10px;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   font: bold;
 
`
const ImageStyle = styled.img `
   width: 250px;
   height: 250px;
   border-image: round;
`

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
   /* & :hover {
   background-color: #e0811b;
   background-image: -webkit-gradient(linear,left top,left bottom,color-stop(10%,#f0a100),to(#f70));
   background-image: linear-gradient(#f0a100 10%,#f70 100%);
   } */
   
`


export default function Card(props) {
   const {name, species, gender, image, onClose} = props;
   return (
      <DivStyle>
         <ButtonStyle onClick={onClose}> X </ButtonStyle>
         {/* <h6>{props.id}</h6> */}
         <Link to={`/detail/${props.id}`}>
         <h2> Nombre : {name} </h2>
         </Link>
         <h3> Especie: {species} </h3>
         <h3> Género: {gender} </h3>
         <ImageStyle  src={image} alt={name} />
      </DivStyle>
   );
}
