import React from "react";
import Button from "../Button/Button";
import classes from "../Post/Post.module.css"

const Post = () => {
  return (
    <div className={classes.post}>
        <div className={classes.post_text}>
            <input type='checkbox'/>
            <div>Текст поста</div>
        </div>
        <Button>Удалить</Button>
    </div>
  );
}
export default Post