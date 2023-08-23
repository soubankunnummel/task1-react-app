import logo from './logo.svg';
import './App.css';
import Jeeep from './Home';
import Counter from './counter';
import Product from './Product';
function App() {
  return (
    <div className="App">
      <Jeeep/>
     
    <div className="center">

    <Counter/>
    </div>

    <Product  name='apple' price='400' discripition='good product'/>
    </div>
    
  );
}

export default App;
