import React from "react";
import "../App.css"; 

const Header: React.FC = () => {

  return (
    <header className="header">
      <h1 className="brand">Reloc8</h1>
      <div className="tagline">buy.sell.settle</div>
    </header>
  );
};

export default Header;
