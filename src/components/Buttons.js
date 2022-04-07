import React from "react";

const btns = [
  {
    label: "AC",
    clsName: "clear",
  },
  {
    label: "C",
    clsName: "clean",
  },
  {
    label: "/",
    clsName: "divide",
  },
  {
    label: "*",
    clsName: "multi",
  },
  {
    label: "+",
    clsName: "plus",
  },
  {
    label: "-",
    clsName: "minus",
  },
  {
    label: "7",
    clsName: "no-7",
  },
  {
    label: "8",
    clsName: "no-8",
  },
  {
    label: "9",
    clsName: "no-9",
  },
  {
    label: "4",
    clsName: "no-4",
  },
  {
    label: "5",
    clsName: "no-5",
  },
  {
    label: "6",
    clsName: "no-6",
  },
  {
    label: "1",
    clsName: "no-1",
  },
  {
    label: "2",
    clsName: "no-2",
  },
  {
    label: "3",
    clsName: "no-3",
  },
  {
    label: "0",
    clsName: "no-0",
  },
  {
    label: ".",
    clsName: "dot",
  },
  {
    label: "=",
    clsName: "ans",
  },
];

export const Buttons = ({ click }) => {
  //   return (

  //     <div class="items">
  //         { btns.map((btn, i)=>{
  //                 //return <button className={btn.clsName}>{btn.label}</button>

  //             })
  //         }

  //         <button class="clear">AC</button>

  //    </div>

  ////////////////////////////short way how to write it
  return (
    <div className="items">
      {btns.map((btn, i) => (
        <button
          key={i}
          className={btn.clsName}
          onClick={() => click(btn.label)}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};
