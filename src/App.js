import './App.css';
import { nanoid } from "nanoid"
import SimpleList from './components/welcome/SimpleList';

function App() {

  const carsNames = [
    { id: nanoid(), name: "Ferrari", price: 180000, power_supply: "Benzine" },
    { id: nanoid(), name: "Fiat", price: 25000, power_supply: "Diesel" },
    { id: nanoid(), name:"Tesla", price: 70000, power_supply: "Electric" }
  ]

  return (
    <div className="App">
      <SimpleList cars={carsNames}></SimpleList>
    </div>
  );
}

export default App;

