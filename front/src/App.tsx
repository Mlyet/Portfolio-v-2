
import './App.css'
import { Fragment } from 'react';
import Header from './Components/Header/Header';
import Parallax from './Components/Parallax/Parallax';
import Cursor from './Components/Cursor/Cursor';

function App() {
  return (
    <Fragment>
      <Cursor />
      <Header/>
      <Parallax />
    </Fragment>
  )
}

export default App
