import React from "react";
import Post from "../Post/Post";
import classes from "../Posts/Posts.module.css"

const Posts = () => {
  return (
    <div className={classes.posts}>
        <Post />
    </div>
  );
}
export default Posts