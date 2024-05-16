import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log("click");
    setCount(count + 1);
    console.log(count);
  };

  return (
    <>
      <button onClick={handleClick}>+</button>
      <span>{count}</span>
      <button onClick={handleClick}>-</button>
    </>
  );
};
