import * as React from 'react';

import Home from './Home';

import './App.css';
import Header from './components/header';

class App extends React.Component {
  public render() {
    return (
      <div className='App'>
        <Header/>
        <Home/>
      </div>
    );
  }
}

export default App;
