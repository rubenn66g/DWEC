import { useState } from "react";
import BotonIncrementar from "./BotonIncrementar";

function App() {
  const [count, setCount] = useState(0);

  function incrementar() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Contador: {count}</h1>
      <BotonIncrementar onClick={incrementar} />
    </>
  );
}

export default App;

