import React from "react";
import { Link } from "react-router-dom";

export default function Colors({ colors }) {
  return (
    <div className='Link'>
      <h2>Please select a color</h2>
      <br />
      <br />
      {colors.map((color, index) => (
        <div key={index}>
          <Link style={linkStyle} to={`/colors/${color}`}>
            {color}
          </Link>
        </div>
      ))}
    </div>
  );
}

const linkStyle = {
  textDecoration: "none",
};
