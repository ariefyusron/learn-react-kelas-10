import React from "react";

const Content = props => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <p>-----------------------------</p>
    </div>
  );
};

export default Content;
