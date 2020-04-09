import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

export default function SingleColor({ colors }) {
  const { color } = useParams();
  console.log(color);
  const { push } = useHistory();
  const isValid = colors.includes(color);
  useEffect(() => {
    if (!isValid) {
      push("/colors");
    }
  }, [isValid, push]);
  return (
    <div style={{ background: color }} className='red1'>
      <p className='red'>This is color {color}</p>
    </div>
  );
}
