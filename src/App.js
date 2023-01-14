import './App.css';
import { Routes, Route } from "react-router-dom"
import CardPrueba from './components/homePage/cards/CardPrueba.jsx'
import LadingPage from './components/ladingPage/LadingPage.jsx'
import DetailGame from './components/detailGame/DetailGame.jsx'
import Form from './components/createForm/Form.jsx'
import axios from 'axios';

// axios.defaults.baseURL = "http://localhost:3001" 
axios.defaults.baseURL = "https://pi-back-production-e280.up.railway.app/"

function App() {
  return (
    <div className="App">
      {/* {location.pathname === '/' ? null : <Nav />} */}
      <Routes>
        <Route default path='/' element={<LadingPage />} />
        <Route path='/videogames' element={<CardPrueba />} />
        <Route path='/videogames/:id' element={<DetailGame />} />
        <Route path='/videogames/form' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
