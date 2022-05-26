import React, {useState} from 'react';
import './App.css';
import { FOOD_MASTERDATA } from "./constants";

function App() {
  const [currentFood, setCurrentFood] = useState<{
    image: string,
    name?: string
  }>({
    image: 'https://img.freepik.com/free-photo/background-texture-printed-question-marks_124595-213.jpg?w=2000',
    name: undefined
  });

  function sleep(ms: number) {
    return new Promise(r => setTimeout(r, ms));
  }

  async function getFood() {
    const keys = Object.keys(FOOD_MASTERDATA);

    for (let i = 0; i < 20; i++) {
      const randomNumber = Math.floor(Math.random() * 1000) % keys.length;
      const food = keys.filter((name, index) => index === randomNumber)[0];

      setCurrentFood({
        image: FOOD_MASTERDATA[food],
        name: i === 19 ? food : undefined
      });

      await sleep(50);
    }
  }

  return (
    <div id="app">
      <div className="title">What to Eat?</div>
      <div className="food">
        <div className="food__image">
          <img src={currentFood.image} alt={currentFood.name || 'Click the button below to get a recommendation'} />
        </div>
        <div className="food__name">{currentFood.name}</div>
      </div>
      <div className="button__wrapper">
        <button onClick={getFood}>Something to Eat</button>
      </div>
    </div>
  );
}

export default App;
