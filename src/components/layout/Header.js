import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
    <header style={headerStyle}>
      <h1>ToDo Gist</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/todo">
        Todo
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
    </div>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  // padding: "10px"
};

const linkStyle = {
    color: '#fff',
    textDecorations: 'none',
    padding: " 0px 100px"
}

export default Header;
