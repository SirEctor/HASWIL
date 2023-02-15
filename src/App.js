import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul className="App-navbar">
        <li id="logo-li"><a><img src={logo} id="logo-in-nav" className="App-logo" alt="logo" /></a></li>
        <li><a>Here Are Some Words I Like</a></li>
        <li><a>Word Stats</a></li>
        <li><a>FAQ</a></li>
        
      </ul>
    </div>
  );
}

export default App;
