import './App.css';
import Nav from './components/Nav';
import Slider from './components/Slider';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Slider/>
      <Home />
    </div>
  );
}

export default App;
