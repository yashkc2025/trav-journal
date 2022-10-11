import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data/data';

function App() {
  const cards = data.map(item => {
    return (
      <Card
        {...item}
      />
    )
  })
  
  return (
    <div className="App">
      <Navbar />
      <div className='card-slider'>
        {cards}
      </div>
    </div>
  );
}

export default App;
