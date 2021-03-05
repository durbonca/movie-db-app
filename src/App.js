import {useState} from "react"
import './App.css';
import Footer from './components/Footer'
import SearchMovies from './components/SearchMovies'

function App() {
  const [ en, setEn ] = useState(true)
  const [language, setLanguage] = useState('en-US')

  function handleLanguage(){
    setEn( !en )
    if(en){
    setLanguage('es-ES')
  }
    else{
      setLanguage('en-US')
    }
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
      <SearchMovies en={en} language={language}/>
    </div>
      <Footer en={en}/>
    </>
  );
}

export default App;
