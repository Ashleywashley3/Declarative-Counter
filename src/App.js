import { useState } from "react"; //invoke the useState. This is a react hook bc starts with use.

//the first value is the actual variable, setcounter is the function that 
function App() {
  const [counter, setCounter] = useState(0) //this is called state, the react hooks hook into the lifecycle of state

  const increment = () => {
    setCounter(counter + 1) //this increases the counter by 1
  }

  const decrement = () => {
    if (counter === 0) return //this limits you from decrementing below 0. Has to be above the setCounter.
    setCounter(currentVal => currentVal - 1) //this decreases the counter by 1
  }
//returning whats on the webpage. Your counter, and the inc & dec buttons
    return (
    <div>
      <h2>Counter: {counter}</h2> 
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

//exporting the app
export default App;
