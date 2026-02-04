import { useState } from 'react'
import './App.css'

function App() {
  // Estado inicial del contador en 0
  const [contador, setContador] = useState(0);

  // Funciones para incrementar y decrementar
  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <main>
      <div className="card">
        <div className="calculadora">
          <h2>🧮 Contador</h2>
          <p>Valor actual: {contador}</p>
          <div className="botones">
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
