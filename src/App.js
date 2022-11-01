import React, {useState} from 'react';
import './styles/css/App.min.css';
import NavButtonsList from './components/NavButtonsList';
import IconsList from './components/IconsList';

function App() {

  return (
    <div className="App">
      <NavButtonsList />
      <IconsList />
    </div>
  );
}

export default App;
