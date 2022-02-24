import React, { useState } from 'react';
import logo from './logo.png';

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>NetZen</h1>
      <img src={logo} />
      <button onClick={() => setCounter((prev) => prev + 1)}>Click Me</button>
      <p>{counter}</p>
    </div>
  );
};

export default App;
