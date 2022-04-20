import './App.css';
import { AiFillBulb, AiOutlineBulb } from "react-icons/ai";

import {useState} from 'react'
import Button from './components/Button';


function App() {

  const [isOn, setIsOn] = useState(false)

  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const [showList, setShowList] = useState(fruits)

  const setLight = () => {
    setIsOn(!isOn)
  }

  const showReds = () => {
    setShowList(fruits.filter(fruit => fruit.color === 'red'))
  }

  const showYellows = () => {
    setShowList(fruits.filter(fruit => fruit.color === 'yellow'))
  }

  return (
    <div className="App">
      <header className="App-header">

        {
          // isOn ? <AiFillBulb size={100} /> : <AiOutlineBulb size={100}/>
        }

      <AiFillBulb size={100} color={isOn ? 'yellow' : undefined}/>

      <Button func={setLight} isOn={isOn}>{isOn ? "Desligar" : "Ligar"}</Button>

      {showList.map((fruit, index) => <p key={index}>{fruit.name}</p>)}

      <Button func={showReds}>Mostrar Vermelhas</Button>
      <Button func={showYellows}>Mostrar Amarelas</Button>
         
      </header>
    </div>
  );
}

export default App;
