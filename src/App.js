import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4000/solutions')
      .then(res => res.json())
      .then(resJson => {
        const randomSolution = resJson[Math.floor(Math.random() * resJson.length)]
        setSolution(randomSolution.word)
      })
  }, [setSolution])

  return (
    <div className="App">
      <h1>WORDLE</h1>
      <p>Hold the <i>Alt</i> or <i>Option</i> key to reveal solution</p>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
