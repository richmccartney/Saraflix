import React from "react";
import "./HeaderStyles.css";

function Logo({ children, ...restProps }) {
  return (
    <div>
      <a href="/" {...restProps}>
        {children}
        <img className="logo" href="/" src="./images/misc/logo.png" alt="Saraflix logo" />
      </a>
    </div>
  );
}

export default Logo;
