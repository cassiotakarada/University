import React, { useState, useEffect } from "react";
import styles from "../ColorInput/ColorInput.module.css";

const ColorInput = () => {
  const [color, setColor] = useState("");
  const [customColor, setCustomColor] = useState("");

  useEffect(() => {
    const savedColor = localStorage.getItem("customColor");
    if (savedColor) {
      setCustomColor(savedColor);
      document.body.style.backgroundColor = savedColor;
    }
  }, []);

  const handleColorChange = (e) => {
    setColor(e.target.value);
    document.body.style.backgroundColor = e.target.value;
    localStorage.removeItem("customColor");
  };

  const handleCustomColorChange = (e) => {
    setCustomColor(e.target.value);
  };

  const handleCustomColorSubmit = (e) => {
    e.preventDefault();
    setColor(customColor);
    localStorage.setItem("customColor", customColor);
    window.location.reload();
  };

  return (
    <div>
      <div className={styles.Container}>
        <label>
          <input
            type="radio"
            name="color"
            value="red"
            onChange={handleColorChange}
          />
           Red
        </label>
        <label>
          <input
            type="radio"
            name="color"
            value="green"
            onChange={handleColorChange}
          />
           Green
        </label>
        <label>
          <input
            type="radio"
            name="color"
            value="blue"
            onChange={handleColorChange}
          />
           Blue
        </label>
        <form onSubmit={handleCustomColorSubmit}>
          <input
            type="text"
            placeholder="Enter a color"
            value={customColor}
            onChange={handleCustomColorChange}
          />
          <button type="submit">Apply</button>
        </form>
      </div>
    </div>
  );
};

export default ColorInput;
