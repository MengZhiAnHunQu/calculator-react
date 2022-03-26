import "./App.css";
import { useState } from "react";
import { Buttons } from "./components/Buttons";
import { Display } from "./components/Display";
import { Title } from "./components/Title";

const operators = ["+", "-", "*", "/"];

const App = () => {
  const [textToDisplay, setTextToDisplay] = useState("");
  const [lastOperator, setLastOperator] = useState("");

  const handleonClick = (val) => {
    //operator check
    console.log("val:", val);
    if (operators.includes(val) || val === "=") {
      const lastOperatorIndex = lastOperator
        ? textToDisplay.lastIndexOf(lastOperator) + 1
        : 0;

      const firstNumberSet = textToDisplay.substring(0, lastOperatorIndex);
      const lastNumberSet = textToDisplay.slice(lastOperatorIndex);

      const str = firstNumberSet + parseFloat(lastNumberSet);

      if (val === "=") {
        return onTotal(str);
      }

      setTextToDisplay(str + val);
      setLastOperator(val);
      return;
    }

    if (val === ".") {
      ///
      //1. index of last operatror or 0
      const lastOperatorIndex = lastOperator
        ? textToDisplay.lastIndexOf(lastOperator) + 1
        : 0;

      const lastNumberSet = textToDisplay.slice(lastOperatorIndex);

      console.log(textToDisplay.lastIndexOf(lastOperator));
      console.log(textToDisplay.slice(0));
      console.log("lastOperator:", lastOperator);
      console.log("lastOperatorIndex", lastOperatorIndex);
      console.log("lastNumberSet", lastNumberSet);

      if (lastNumberSet.includes(".")) {
        return;
      }

      ///

      // if (lastOperator) {
      //   const lastOperatorIndex = textToDisplay.lastIndexOf(lastOperator);
      //   const lastNumberSet = textToDisplay.slice(lastOperatorIndex + 1);
      //   console.log(lastOperator);
      //   console.log(lastNumberSet);

      //   if (lastNumberSet.includes(".")) {
      //     return;
      //   }
      // } else {
      //   if (textToDisplay.includes(".")) return;
      // }
    }

    if (val === "AC") {
      return setTextToDisplay("");
    }
    if (val === "C") {
      const str = textToDisplay.slice(0, -1);
      return setTextToDisplay(str);
    }
    //no two operators showing together
    if (operators.includes(val)) {
      const lastChar = textToDisplay.slice(-1);

      if (operators.includes(lastChar)) {
        const str = textToDisplay.slice(0, -1) + val;
        return setTextToDisplay(str);
      }
    }

    setTextToDisplay(textToDisplay + val);
  };

  const onTotal = (str) => {
    //let str = textToDisplay;

    const lastChar = str.slice(-1);

    if (operators.includes(lastChar)) {
      str = str.slice(0, -1);
    }
    const ttl = eval(str);
    setTextToDisplay(ttl.toString());
  };

  return (
    <div>
      <div className="wrapper">
        <Title />

        <div className="mainParent">
          {/* <!-- display area --> */}
          <Display textToDisplay={textToDisplay} />

          {/* <!-- button area --> */}
          <Buttons click={handleonClick} />
        </div>
      </div>
    </div>
  );
};

export default App;
