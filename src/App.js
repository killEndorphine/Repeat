import React from "react";
import './App.css';



function App() {
  return (
    <div className="App">
      
          <h1 className="h1">Список постов</h1>

          <form className="form">
              <input className="input" placeholder='Введите текст поста'/>
              <button className="button">Отправить</button>
          </form>

          <div className="posts">
            <div className="post">
              <div className="post_text">
                  <input type='checkbox'/>
                  <div>Текст поста</div>
              </div>
              <button className="button">Удалить</button>
            </div>
          </div>
        
    </div>
  );
}
export default App;
