import './App.css'
import Counter from './Counter'
import Team from './Team';
import User from './User';
import Friends from './Friends';

function App() {

  function handleClick() {
    alert('button clicked');
  }

  const handleClick2 = () => {
    alert('button 2 clicked')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <h3>React Core Concepts 2</h3>
      
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter> </Counter>
      <button onClick={handleClick}>Click Me</button>

      <button onClick={handleClick2}>Click 1</button>

      <button onClick={() => {alert('third clicked')}}>Click 2</button>

      <button onClick={() => addToFive(3)}>Four</button>


    </>
  )
}

export default App

