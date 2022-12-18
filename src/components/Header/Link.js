

import React, { useState, useRef, useEffect } from "react";

// import * as style from "./App.css";

export default function Dropdown() {
  const container = useRef();
  const [dropdownState, setDropdownState] = useState({ open: false });

  const handleDropdownClick = () =>
    setDropdownState({ open: !dropdownState.open });

  const handleClickOutside = (e) => {
    if (container.current && !container.current.contains(e.target)) {
      setDropdownState({ open: false });
    }
  };

  // attaches an eventListener to listen when componentDidMount
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    // optionally returning a func in useEffect runs like componentWillUnmount to cleanup
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={container}>
      <button type="button" onClick={handleDropdownClick} >Click me  </button>
      {dropdownState.open && (
        <div >
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
      )}
     
    </div>
  );
}