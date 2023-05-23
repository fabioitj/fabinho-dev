import './App.scss'
import SideBar from './components/sidebar'
import Inicio from './components/inicio'
import Habilidades from './components/habilidades'
import Contato from './components/contato'
import ParticlesComp from './components/particles'
import { useEffect, useState } from 'react'

function App() {
  const [offset, setOffset] = useState(1);
  const height = 5000;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if((height - window.pageYOffset) / height < 0.5) {
        setOffset(0.5);
      }
      else {
        setOffset((height - window.pageYOffset) / height);
      }
    });
  }, []);

  useEffect(() => {
    console.log({offset});
  }, [offset]);

  const rgba = 'rgba(0,0,0,' + (1 - offset) + ')';
  return (
    <>
      
      <SideBar/>
      
      <Inicio/>
      <Habilidades/>
      <Contato/>
      <ParticlesComp/>
      <div className="background" style={{backgroundColor: rgba}}></div>
    </>
  )
}

export default App
