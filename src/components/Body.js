import React from "react";

import Content from "./Content";

const listData = [
  {
    title: "title 1",
    desc:
      "Lorem commodo proident do nostrud laborum culpa proident voluptate eu est cillum non cupidatat."
  },
  {
    title: "title 2",
    desc:
      "Lorem commodo proident do nostrud laborum culpa proident voluptate eu est cillum non cupidatat."
  }
];

const Body = () => {
  return (
    <div>
      {listData.map(item => (
        <Content title={item.title} desc={item.desc} />
      ))}
    </div>
  );
};

export default Body;
