import React, { useState } from 'react';
import Dado from './components/Dado';
import './App.css';

function App() {
  const [numeroJogador1, setNumeroJogador1] = useState(1);
  const [numeroJogador2, setNumeroJogador2] = useState(1);
  const [vezDoJogador, setVezDoJogador] = useState(1); // alterna entre 1 e 2
  const [rodada, setRodada] = useState(1);
  const [placarJogador1, setPlacarJogador1] = useState(0);
  const [placarJogador2, setPlacarJogador2] = useState(0);
  const [valorJogador1, setValorJogador1] = useState(null);
  const [valorJogador2, setValorJogador2] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const rolarDadoJogador1 = () => {
    if (vezDoJogador !== 1 || rodada > 5) return;

    const numero = Math.floor(Math.random() * 6) + 1;
    setNumeroJogador1(numero);
    setValorJogador1(numero);
    setVezDoJogador(2);
  };

  const rolarDadoJogador2 = () => {
    if (vezDoJogador !== 2 || rodada > 5) return;

    const numero = Math.floor(Math.random() * 6) + 1;
    setNumeroJogador2(numero);
    setValorJogador2(numero);

    // após jogador 2 jogar, compara valores e atualiza placar
    if (valorJogador1 > numero) {
      setPlacarJogador1(prev => prev + 1);
    } else if (numero > valorJogador1) {
      setPlacarJogador2(prev => prev + 1);
    }

    // próxima rodada ou fim do jogo
    if (rodada === 5) {
      let resultado = '';
      if (placarJogador1 > placarJogador2) {
        resultado = '🏆 Jogador 1 venceu o jogo!';
      } else if (placarJogador2 > placarJogador1) {
        resultado = '🏆 Jogador 2 venceu o jogo!';
      } else {
        resultado = '⚖️ Empate no jogo!';
      }
      setMensagem(resultado);
    }

    // prepara próxima rodada
    setRodada(prev => prev + 1);
    setVezDoJogador(1);
    setValorJogador1(null);
    setValorJogador2(null);
  };

  const jogarNovamente = () => {
    setNumeroJogador1(1);
    setNumeroJogador2(1);
    setVezDoJogador(1);
    setRodada(1);
    setPlacarJogador1(0);
    setPlacarJogador2(0);
    setValorJogador1(null);
    setValorJogador2(null);
    setMensagem('');
  };

  return (
    <div className="container">
      <h1 className="titulo">JOGO DE DADOS 🎲</h1>
      <h2 className="rodada">Rodada {rodada <= 5 ? rodada : 5}/5</h2>

      <div className="dados-container">
        <div className="jogador">
          <h3>Jogador 1</h3>
          <Dado numero={numeroJogador1} />
          <button
            className="botao"
            onClick={rolarDadoJogador1}
            disabled={vezDoJogador !== 1 || rodada > 5}
          >
            Jogar Dado
          </button>
        </div>

        <div className="jogador">
          <h3>Jogador 2</h3>
          <Dado numero={numeroJogador2} />
          <button
            className="botao"
            onClick={rolarDadoJogador2}
            disabled={vezDoJogador !== 2 || rodada > 5}
          >
            Jogar Dado
          </button>
        </div>
      </div>

      <h3 className="titulo-placar">Placar</h3>
      <table className="tabela-placar">
        <thead>
          <tr>
            <th>Jogador 1</th>
            <th>Jogador 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{placarJogador1}</td>
            <td>{placarJogador2}</td>
          </tr>
        </tbody>
      </table>

      {mensagem && (
        <>
          <h2 className="mensagem-final">{mensagem}</h2>
          <button className="botao" onClick={jogarNovamente}>
            Jogar Novamente
          </button>
        </>
      )}
    </div>
  );
}

export default App;
