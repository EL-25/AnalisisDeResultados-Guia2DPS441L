import { useState } from 'react'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState(null);

  const manejarLogin = () => {
    // Credenciales correctas (ejemplo básico)
    if (usuario === 'admin' && contrasena === '1234') {
      setMensaje(`Bienvenido, ${usuario}! 🎉`);
    } else {
      setMensaje('Credenciales incorrectas, intente de nuevo.');
    }
  };

  const reiniciar = () => {
    setUsuario('');
    setContrasena('');
    setMensaje(null);
  };

  return (
    <main>
      <div className="card">
        <div className="login">
          <h2>🔑 Formulario de Login</h2>

          <div className="campo">
            <label className="text">Usuario:</label>
            <input
              className="input"
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>

          <div className="campo">
            <label className="text">Contraseña:</label>
            <input
              className="input"
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>

          <div className="botones">
            <button onClick={manejarLogin}>Iniciar Sesión</button>
            <button className="secondary" onClick={reiniciar}>Reiniciar</button>
          </div>

          {mensaje && (
            <div className={mensaje.includes('incorrectas') ? 'resultado error' : 'resultado'}>
              {mensaje}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
