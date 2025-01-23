import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>UTA Event Planner</h1>
          <p>Party and Events!</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="text" placeholder="E-mail" />
            <button>Subscribe!</button>
          </div>
          <p>Sign up for Discounts and Updates!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;