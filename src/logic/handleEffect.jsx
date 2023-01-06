// getting called at every render
// mounting
// updating
// unmounting (clear some effect) avoid memory leak

import { useEffect, useState } from "react";

export function UseEffectExample() {
  const [count, setCount] = useState(0);

  // going to execute at every render function
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setCount((prevCount) => prevCount + 1);
  //     }, 2000);
  //   });

  // going to execute at mount (only one time)
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 2000);
  }, []); // passed here dependency array

  // going to execute at when props or state going to change
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 2000);
  }, [count]); // whenever count get updated then it will going to execute

  return <h1>{count}</h1>;
}
