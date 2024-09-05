import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let pass = document.getElementById("pass");
  let bienvenido = document.getElementById("bienvenido");
  const [name, setName] = useState("");
  const pepeloco = (e) => {
    setName(e.target.value);
  };
  const [bienv, setBienv] = useState("");

  const btnLocardi = () => {
    if (name == pass.value) {
      setBienv("Si sos vos!! Bienvenido!!!!!");
    }
  };
  return (
    <>
      <div>
        <h1 id="h1">Hola {name} </h1>
        <input
          type="text"
          onChange={pepeloco}
          placeholder="Ingresa tu Usuario"
        />
        <input type="text" id="pass" placeholder="Ingresa tu contraseña" />
        <p>{bienv}</p>
        <button onClick={btnLocardi}>Entrar</button>
      </div>
    </>
  );
}

export default App;
