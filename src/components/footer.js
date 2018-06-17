import React from "react";
import "../styles/footer.scss"

export default({children}) =>
  <footer>

    <svg viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon strokeWidth="0" points="0 0, 0 10, 10 0"></polygon>
      <polygon strokeWidth="0" fill="#148fce" points="0 10.01, 0 8.5, 10.01 0, 10.01 1.5"></polygon>
    </svg>

    {children}

  </footer>