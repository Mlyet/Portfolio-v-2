import Header from './Components/Header/Header';
import Camera from './Components/Camera/Camera';
import Me from './Components/Me/Me';
import './App.css'
import { Fragment } from 'react';

function App() {


  return (
    <Fragment>
      <Header />
      <Camera />
      <Me />
    </Fragment>
  )
}

export default App
