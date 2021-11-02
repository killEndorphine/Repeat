import React from "react";
import './App.css';
import Container from "./Component/Container/Container";
import PostForm from "./Component/PostForm/PostForm";
import Posts from "./Component/Posts/Posts";

function App() {
  return (
    <div className="App">
        <Container>
            <h1 className="h1">Список постов</h1>
            <PostForm />
            <Posts />
        </Container>
    </div>
  );
}
export default App;
