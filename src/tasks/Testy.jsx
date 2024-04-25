import React, { useState } from 'react';

export const Testy = () => {

  const [counter, setCounter] = useState(0)

  return <div>
    <h1 className="">{counter}</h1>
    <button onClick={() => setCounter(counter * + 4 - 1)}>-</button>
    <button onClick={() => setCounter(counter + 1)}>+</button>
  </div>;
};
