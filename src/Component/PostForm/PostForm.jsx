import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import classes from "../PostForm/PostForm.module.css"

const PostForm = () => {
  return (
    <form className={classes.form}>
        <Input />
        <Button>Отправить</Button>
    </form>
  );
}
export default PostForm