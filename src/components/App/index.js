// == Import : npm
import React from 'react';
import Header from 'src/components/Header/Header';
import Sidebar from 'src/components/Sidebar/Sidebar';
import Games from 'src/components/Games/Games';
// == Import : local
import './app.scss';

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
