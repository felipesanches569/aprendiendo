import logo from './logo.svg';
import './App.css';
import React  from 'react';
function holamundo(nombre, edad)
{ // inicio para usar el div
  var presentecion = 
  (
    <div>   
      < h2>Hola, soy {nombre}</h2>
      <h3>Tengo {edad} años</h3>
    </div>
  )
  return presentecion;
}

function App() {
  var nombre = "JUAN ROLDAN";
 // var presentecion = <h2>Hola, soy {nombre}</h2>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         HOLA MUNDO SOY JHRR...
        </p>
        {
          holamundo(nombre, 25)
        }
        {       
        /*  alert("te estoy robando tus datos!! llamame 3125452344")*/
        }
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
  );
}

export default App;
