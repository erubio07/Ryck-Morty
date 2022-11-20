import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters, { Rick } from './data.js'
import styled from "styled-components";


const AppStyle = styled.div `
  background-image: url(https://i.pinimg.com/originals/f2/7d/7e/f27d7ec85dedb8148919b237cd4ea3e8.jpg);
  background-size: cover;
  background-repeat: no-repeat;
`

function App () {
  return (
    <AppStyle className='App' style={{ padding: '25px' }}>
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
      <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr />
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <hr />
    </AppStyle>
  )
}

export default App
