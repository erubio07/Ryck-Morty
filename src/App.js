import './App.css'
import Cards from './components/Cards.jsx'
import { useState, useEffect } from 'react';
import styled from "styled-components";
import Nav from './components/Nav';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from "./components/Form"

const AppStyle = styled.div `
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

const location = useLocation(); 
const navigate = useNavigate();
const [access, setAccess] = useState(false);
const username = 'erubio07@gmail.com';
const password = 'erubio07';

function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
}

useEffect(() => {
  !access && navigate('/');
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [access]);

  return (
    <AppStyle className='App' style={{ padding: '25px' }}>
      
      <div>
        {location.pathname === "/" ? null : <Nav onSearch={onSearch}/>}
      </div>
      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
        <Route path='/home' element={<Cards
          characters={characters} onClose={onClose}
        />}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/detail/:detailId' element={<Detail/>}/>
      </Routes>
      
            
    </AppStyle>
  )
}

export default App
