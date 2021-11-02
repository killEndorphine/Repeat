import React from "react";
import classes from "../Input/Input.module.css"

const Input = () => {
  return (
    <input className={classes.input} placeholder='Введите текст поста'/>
  );
}
export default Input