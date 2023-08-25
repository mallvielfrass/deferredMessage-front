import "./App.css";

import { createStore, useStore } from './reactive'

import Bar from "./components/Bar/Bar";
import logo from "./logo.svg";

createStore({
    count: 0
})

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
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
      </header> */}

      <Bar isLogin={true}/>
    </div>
  );
}

export default App;
