import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Slider from './Components/Slider'
import ProductionCompany from './Components/ProductionCompany'
import GenreMovieList from './Components/GenreMovieList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <Header/>
        <Slider/>
        <ProductionCompany/>
        <GenreMovieList/>
      </div>        
    </>
  )
}

export default App
