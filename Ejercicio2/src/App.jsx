import { useState } from 'react'
import './App.css'

function App() {
  const [temperatura, setTemperatura] = useState('');
  const [conversion, setConversion] = useState('CtoF'); // opción por defecto
  const [resultado, setResultado] = useState(null);

  const convertir = () => {
    if (temperatura === '') {
      setResultado('Por favor ingrese una temperatura');
      return;
    }

    const valor = parseFloat(temperatura);

    if (conversion === 'CtoF') {
      const fahrenheit = (valor * 9/5) + 32;
      setResultado(`${valor} °C = ${fahrenheit.toFixed(2)} °F`);
    } else {
      const celsius = (valor - 32) * 5/9;
      setResultado(`${valor} °F = ${celsius.toFixed(2)} °C`);
    }
  };

  const reiniciar = () => {
    setTemperatura('');
    setResultado(null);
  };

  return (
    <main>
      <div className="card">
        <div className="calculadora">
          <h2>🌡️ Convertidor de Temperatura</h2>
          <div className="numeros">
            <label className="text">Ingrese la temperatura:</label>
            <input
              className="inputNum"
              type="number"
              value={temperatura}
              onChange={(e) => setTemperatura(e.target.value)}
            />
          </div>

          <div className="numeros">
            <label className="text">Seleccione conversión:</label>
            <select
              className="inputNum"
              value={conversion}
              onChange={(e) => setConversion(e.target.value)}
            >
              <option value="CtoF">Celsius → Fahrenheit</option>
              <option value="FtoC">Fahrenheit → Celsius</option>
            </select>
          </div>

          <div className="botones">
            <button onClick={convertir}>Convertir</button>
            <button className="secondary" onClick={reiniciar}>Reiniciar</button>
          </div>

          <div className="resultado">{resultado}</div>
        </div>
      </div>
    </main>
  );
}

export default App;
