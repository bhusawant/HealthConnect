import React from "react";
import close from "../Assets/icon-remove.svg";

const Header2 = ({ keywords, removeKeywords, clearAll }) => {
  return (
    <div className="header-container">
      <ul>
        {keywords.map((key, id) => {
          return (
            <li key={id}>
              {key}
              <button className="close" onClick={() => removeKeywords(key)}>
                <img src={close} alt="" />
              </button>
            </li>
          );
        })}
        <a href="/#" onClick={() => clearAll()}>
          Clear
        </a>
      </ul>
    </div>
  );
};

export default Header2;
