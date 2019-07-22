import React from 'react';
import './App.css';
import M from 'materialize-css'
import { Parallax, Logo } from './Components/Parallax/Parallax.js';

import AppRouter from './appRouter/routes';
import HeaderFont from './Components/HeaderText/font';

class App extends React.Component {
  
  componentDidMount() {
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
        var modal = document.querySelectorAll('.modal');
        M.Modal.init(modal);
}
  render() {

    return (
      <div className="App">
        <Logo />
        <HeaderFont />
        <Parallax />
        <AppRouter />
      </div>
    )
  }
}

export default App;
