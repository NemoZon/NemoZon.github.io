import React, {useState} from 'react';
import './styles/css/App.min.css';
import NavButtonsList from './components/NavButtonsList';
import IconsList from './components/IconsList';
import StarsList from './components/StarsList';

function App() {
  return (
    <div className="App">
      <NavButtonsList />
      <IconsList />
      <StarsList />
    </div>
  );
}

export default App;
