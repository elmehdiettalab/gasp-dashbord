import React from 'react';
import './styles/main.scss'; 
import Sidebar from './components/Sidebar';
import Carding from './components/Carding';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Carding/>
      <Content/>

    </div>
  );
}

export default App;
