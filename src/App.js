import React from 'react';
import Home from './components/Home'
import Rooms from './components/Rooms'
import SingleRoom from './components/SingleRoom'
import ErrorPage from './components/ErrorPage'
//import './App.css';

function App() {
  return (
    <React.Fragment>
      <Home/>
      <Rooms/>
      <SingleRoom/>
      <ErrorPage/>
    </React.Fragment>
  );
}

export default App;
