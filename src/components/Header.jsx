import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <nav>
      <div className="nav1">
        <Link to="/">
          <img width="200px" src="../public/img/logo1.png" alt="лого" />
        </Link>
        ;
      </div>
      <div className="nav2">
        <Link to="/about">About</Link>;<Link to="/income">Income</Link>
        <Link to="/expenses">Expenses</Link>
      </div>
    </nav>
  );
};
export default Header;
