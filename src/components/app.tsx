import Header from "./header";
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <Header message="Naming Contests" />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {counter}
      </button>
    </div>
  );
};

export default App;
