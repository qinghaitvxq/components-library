import React, { useState, useEffect } from "react";
import { SearchInput, Button } from "./components";
import "./app.scss";

const App = () => {
  const [count, setCount] = useState(-1);
  const onSearch = (str) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: "红楼梦" },
          { id: 2, title: "金瓶梅" },
          { id: 3, title: "儒林外史" },
          { id: 4, title: "聊斋志异" },
        ]);
      }, 1000);
    });
  };
  return (
    <div id="container">
      <SearchInput onSearch={onSearch} />
      <Button>测试</Button>
    </div>
  );
};

export default App;
