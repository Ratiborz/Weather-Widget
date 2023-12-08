import logo from './logo.svg';
import './App.css';

function ImageContainer() {
  return (
    <img src="https://www.vkruzhevah.ru/upload/resize_cache/webp/upload/iblock/0d9/mari.webp" alt='Изображение для статьи'/>
  )
}

function App() {
  return (
    /*<div className="App">
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
    </div> */

    <section>
      <h1>React ebash</h1>
      <ImageContainer/>
      <ImageContainer/>
      <ImageContainer/>
    </section>
  ); 
}

export default App;
