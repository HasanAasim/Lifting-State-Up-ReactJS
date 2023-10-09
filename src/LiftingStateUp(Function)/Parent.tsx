import { useState } from "react";
import Child from "./Child";
const Parent = () => {
  const [value, setValue] = useState(100);

  const setNewValue = (val: any) => {
    setValue(val);
  };
  return (
    <>
      <p>{value}</p>
      <Child newValue={setNewValue} />
    </>
  );
};

export default Parent;
