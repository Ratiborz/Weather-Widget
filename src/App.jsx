import logo from './logo.svg';
import './App.css';

import React from "react";
    import User from "./Components/User";

    function App() {
     const user = {
       name: 'Ivan',
       secondName: 'Petrov',
       age: '25',
       gender: 'М',
       rank: 3
     }
     return (
       <div>
         <User {...user}/>
       </div>
     );
    }
    export default App;

function ImageContainer() {
  return (
    <div>
      <img src="https://www.vkruzhevah.ru/upload/resize_cache/webp/upload/iblock/0d9/mari.webp" alt='Изображение для статьи'/>
      <span>Крутой подзаголовок для нашей статьи</span>
    </div>
  )
}

/*function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> 

    <section>
      <h1>React ebash</h1>
      <ImageContainer/>
      <ImageContainer/>
      <ImageContainer/>
    </section>
    </>
  ); 
}

export default App; */
