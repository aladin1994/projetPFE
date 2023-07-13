
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import Layout from './Components/Layout';
import Public from './Components/Public';
import Login from './Components/Login';
import RequireAuth from './Components/RequireAuth';
import Welcome from './Components/Welcome';
function App() {

  return (
    <div className="App">
      <Home/>     
    
    </div>
  );
}

export default App;
