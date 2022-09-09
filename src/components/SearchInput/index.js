import React, { useState, useEffect } from "react";
import styles from "./index.scss";

function SearchInput({ onSearch }) {
  const [value, setValue] = useState("");
  const [suggests, setSuggests] = useState([]);
  const onInputChange = (e) => {
    const inputStr = e.currentTarget.value;
    setValue(inputStr);
    onSearch(inputStr).then((list) => {
      setSuggests(list);
    });
  };
  const onUserSelect = (item) => {
    console.log(item);
    setValue(item.title);
    setSuggests([]);
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.userinput}
        type="text"
        placeholder="请输入"
        autoComplete="off"
        onChange={onInputChange}
        value={value}
      />
      <ul className={styles.suggestionsList}>
        {suggests.map((suggest) => {
          return (
            <li onClick={onUserSelect.bind(null, suggest)} key={suggest.id}>
              {suggest.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchInput;
