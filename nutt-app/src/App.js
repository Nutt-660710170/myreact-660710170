import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import JSXExamples from './components/JSXExamples';

function App() {
  return (
    <div className="App">
      <Hello />
      <JSXExamples />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello <code>This is Nutt</code> React.
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

export default App;
