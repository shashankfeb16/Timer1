import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
     <Timer initialvalue={0} finalvalue={10}></Timer>
    </div>
  );
}

export default App;
