import React, { useContext } from 'react'
import { ThemeContext } from './create'

const UseContextHook = () => {
  const {backgroundColor, color, name } = useContext(ThemeContext);
  const componentStyle = {
    backgroundColor: backgroundColor,
    color: color,
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
  };
  return (
    <>
    <div style={componentStyle}>
        <p>{name}</p>
    </div>
    </>
  )
}

export default UseContextHook