// == Import : npm
import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Games from './components/Games/Games';
// == Import : local
 import './App.css';

// == Composant
const App = () => (
  <div id="app">
    <Header />
    <Sidebar />
    <Games />
  </div>
);

// == Export
export default App;