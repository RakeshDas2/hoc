// import logo from './logo.svg';
import './App.css';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';

function App() {
  return (
    <div className="App">
      <CounterOne userName='guru'/>
      <br/>
      <hr/>
      <CounterTwo/>
      
    </div>
  );
}

export default App;
