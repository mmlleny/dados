import React, { useState } from 'react';
import Dado from './components/Dado';

function App() {
  const [valor, setValor] = useState(1);

  const rolarDado = () => {
    const novoValor = Math.floor(Math.random() * 6) + 1;
    setValor(novoValor);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Jogo de Dados 🎲</h1>
      <Dado valor={valor} />
      <button onClick={rolarDado} style={{ marginTop: '20px', padding: '10px 20px' }}>
        Rolar Dado
      </button>
    </div>
  );
}

export default App;
