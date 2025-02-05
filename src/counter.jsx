

import { useState } from "react";
import Counting from "./count";
import Increment from "./increment";
import Subtract from "./decrement";
import MyInput from "./input";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  let statement = "Keep counting...";
  if (count > 10) {
    statement = "Let op !!! It's higher than 10!";
  } else if (count < 0) {
    statement = "Let op !!! It's lower than 0!";
  }

  const style = { color: "red", backgroundColor: "black", fontSize: "30px" };
  const styleOb = { color: "red", marginLeft: "30px" };

  return (
    <div>
      <h1>My First Counter</h1>
      <h2>Type who did this great work ?  </h2>

      <MyInput value={name} onChange={(e) => setName(e.target.value)} />
      
      <Counting count={count} />
      <Increment style1={styleOb} add={() => setCount(0)} className="reset" />
      <Increment style1={styleOb} add={() => setCount(count + 1)} className="add-1" />
      <Subtract style1={styleOb} sub={() => setCount(count - 1)} />
      <p style={style}>{statement}</p>
      <p style={style}>Created by {name}</p>
      <h1 style={{ color: "orange" }}>
        {name === ""
          ? ""
          : name === "fady" ||name === "Fady"
          ? `you are right .. ${name} is the best programmer ever `
          : `NOOOO .. ${name} can not do like this work       `   }
      </h1>
    </div>
  );
};

export default Counter;
