import React from "react";
import "../styles/header.scss"

export default({children}) =>
  <header>

    {children}

    <svg viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon strokeWidth="0" points="0 10, 10 0, 10 10"></polygon>
      <polygon strokeWidth="0" fill="#148fce" points="0 10.01, 0 9, 10.01 0, 10.01 1"></polygon>
    </svg>

  </header>