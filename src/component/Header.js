import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='header'>
      <h1 className='header1'>Welcome To The Color Factory</h1>
      <Link className='Link2' to='/color/new'>
        Add a color
      </Link>
    </div>
  );
}
