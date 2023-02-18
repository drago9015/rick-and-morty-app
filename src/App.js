import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
import characters, { Rick } from './data.js'

function App() {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav
          onSearch={(characterID) => alert(characterID)}
        />
      </div>
      <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr />
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <hr />

    </div>
  )
}

export default App