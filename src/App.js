import { useEffect, useState } from "react";

// components
import Wordle from "./components/Wordle";

// libraries
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      {solution && <Wordle solution={solution} />}
      <ToastContainer />
    </div>
  );
}

export default App;
