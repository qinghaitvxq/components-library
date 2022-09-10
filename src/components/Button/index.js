import React, { useState, useEffect } from "react";
import styles from "./index.scss";

function Button({ children }) {
  return <button className={styles.btn}>{children}</button>;
}

export default Button;
