
import './App.css';
import Car from './Car/Car'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Car name = {'Ford'} year ={2018}/>
        <Car name = {'Audi'} year ={2016}/>
        <Car name = {'Mazda'} year ={2010}/>
      </header>
    </div>
  );
}

export default App;
