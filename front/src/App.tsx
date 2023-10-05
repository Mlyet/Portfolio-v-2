
import './App.css'
import { Fragment } from 'react';
import Header from './Components/Header/Header';
import Presentation from './Components/Prestation/Presentation';
import Parallax from './Components/Parallax/Parallax';
import Cursor from './Components/Cursor/Cursor';
import Tools from './Components/Tool/Tools';

function App() {
  return (
    <Fragment>
      <Cursor />
      <Header/>
      <Presentation />
      <Parallax />
      <Tools />
    </Fragment>
  )
}

export default App
