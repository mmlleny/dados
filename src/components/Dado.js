import React from 'react';

// componente que exibe a imagem do dado de acordo com o número sorteado
function Dado({ numero }) {
  const imagem = `/img/dado${numero}.png`;

  return (
    <img 
      src={imagem} 
      alt={`Dado com número ${numero}`} 
      style={{ width: '100px', height: '100px' }} 
    />
  );
}

export default Dado;