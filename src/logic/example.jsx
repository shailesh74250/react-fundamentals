import { useState, useEffect } from "react";

export function Example() {
  const [repeatedAge, setRepeatedAge] = useState({
    twenty: 0,
    twentyOne: 0,
    twotwozero: 0,
    twentyThree: 0,
  });

  const nameAgeList = [
    { name: "fs", age: 20 },
    { name: "gs", age: 21 },
    { name: "hs", age: 220 },
    { name: "js", age: 220 },
    { name: "ls", age: 23 },
    { name: "ns", age: 23 },
  ];

  useEffect(() => {
    nameAgeList.forEach((arryItem) => {
      if (arryItem.age === 20) {
        setRepeatedAge((previousAge) => ({
          ...previousAge,
          twenty: previousAge.twenty + 1,
        }));
      } else if (arryItem.age === 21) {
        setRepeatedAge((previousAge) => {
          return { ...previousAge, twentyOne: previousAge.twentyOne + 1 };
        });
      } else if (arryItem.age === 220) {
        setRepeatedAge((previousAge) => {
          return { ...previousAge, twotwozero: previousAge.twotwozero + 1 };
        });
      } else if (arryItem.age === 23) {
        setRepeatedAge((previousAge) => {
          return { ...previousAge, twentyThree: previousAge.twentyThree + 1 };
        });
      }
    });
  }, []);

  return (
    <>
      <p>{repeatedAge.twenty}</p>
      <p>{repeatedAge.twentyOne}</p>
      <p>{repeatedAge.twotwozero}</p>
      <p>{repeatedAge.twentyThree}</p>
    </>
  );
}
