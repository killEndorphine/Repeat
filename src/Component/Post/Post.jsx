import React from "react";
import classes from "../Post/Post.module.css"

const Post = () => {
  return (
    <div className={classes.post}>
        <div className={classes.post_text}>
            <input type='checkbox'/>
            <div>Текст поста</div>
        </div>
        <button className={classes.button}>Удалить</button>
    </div>
  );
}
export default Post