import React from 'react';
import logo from './logo1.jpg';
import reactLogo from './logo.svg';
import './App.css';
//import Mycomp from './components/greet';
import { greet } from './components/greet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={reactLogo}  className="App-react-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={reactLogo} className="App-react-logo" alt="logo" />
        <p>
        <greet/>
        <Header/>
            <Content/>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


class Header extends React.Component {
  render() {
     return (
        <div>
           <h1>Header</h1>
        </div>
     );
  }
}
class Content extends React.Component {
  render() {
     return (
        <div>
           <h2>Content</h2>
           <p>The content text!!!</p>
        </div>
     );
  }
}


export default App;
