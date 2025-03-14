import React from 'react';

function Dado({ valor }) {
    const imagens = {
        1: '/img/dado1.png',
        2: '/img/dado2.png',
        3: '/img/dado3.png',
        4: '/img/dado4.png',
        5: '/img/dado5.png',
        6: '/img/dado6.png',
      };
  return (
    <div>
      <img src={imagens[valor]} alt={`Dado número ${valor}`} width="100" />
    </div>
  );
}

export default Dado;
