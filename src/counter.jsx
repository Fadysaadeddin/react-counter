import { useState } from "react";
import { Count } from "./count";
import { Button } from "./button+";
import { Subtract } from "./button-";
import { MyInput } from "./input";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [ name , setName] = useState('')

  let statement = "Keep counting...";

  if (count > 10) {
    statement = "Let op !!! It's higher than 10!";
  } else if (count < 0) {
    statement = "Let op !!! It's lower than 0!";
  } else {
    statement;
  }


  const style = { color: "red", backgroundColor: "black", fontSize: "30px" };
  const styleOb = { color: "red", marginLeft: "30px" };

  return (
    <div>
      <h1>My First Counter</h1>
      <MyInput value={name} onChange={(e) => setName(e.target.value)}/>
      <Count count={count} />
      <Button style1={styleOb} add={() => setCount(0) } className="reset" />
      <Button style1={styleOb} add={() => setCount(count + 1) }  className="add 1" />
      <Subtract style3={styleOb} sub={() => setCount(count - 1)} />
      <p style={style}>{statement}</p>
      <p style={style}>Created by {name} </p>
      <h1 style={{ color: 'orange' }}>
        {name === "" 
          ? ""  
          : name === "fady" 
          ? `GREAT JOB ${name}`  
          : `SORRY .. I DO NOT LIKE IT ${name}`     
        }
      </h1>
    </div>
  );
};

export default Counter;
