import './App.css'
import Cards from './components/Cards.jsx'
import { useState } from 'react';
import styled from "styled-components";
import Nav from './components/Nav';

const AppStyle = styled.div `
  background-image: url(https://i.pinimg.com/originals/f2/7d/7e/f27d7ec85dedb8148919b237cd4ea3e8.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: #ffffff;
  display: block;
  block-size: 100% 100%;
`

function App () {
  const [characters, setCharacters] = useState ([]);
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 const onClose = (id) => {
  setCharacters(characters.filter(char => char.id !== id)) //seteamos el estado de characteres y con el filter le decimos que todos los id que sean distintos
  //al que se pasa por parametros se quiten del arreglo
 }
  return (
    <AppStyle className='App' style={{ padding: '25px' }}>
      
      <div>
        <Nav onSearch={onSearch}/>
      </div>
      
      <div>
        <Cards
          characters={characters} onClose={onClose}
        />
      </div>
      
    </AppStyle>
  )
}

export default App
