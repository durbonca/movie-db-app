import {useState} from "react"
import './App.css';
import Footer from './components/Footer'
import SearchMovies from './components/SearchMovies'

function App() {
  const [ en, setEn ] = useState(true)

  function handleLanguage(){
    setEn( !en )
  }

  return (
    <>
    <div className="container">
      <select type="select" onChange={handleLanguage}>
        <option name="en">English 🇺🇸</option>
        <option name="es">Español 🇪🇸</option>
      </select>
      <h1 className="title">
        { en ? 'App Movie Search' : 'App Busqueda de Peliculas'}
      </h1>
      <SearchMovies en={en} />
    </div>
      <Footer en={en}/>
    </>
  );
}

export default App;
