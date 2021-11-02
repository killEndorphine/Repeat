import React from "react";
import classes from "../PostForm/PostForm.module.css"

const PostForm = () => {
  return (
    <form className={classes.form}>
        <input className={classes.input} placeholder='Введите текст поста'/>
        <button className={classes.button}>Отправить</button>
    </form>
  );
}
export default PostForm