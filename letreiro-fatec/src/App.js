import React, { useState, useEffect } from 'react';

function App() {
  const texto = "Venha estudar na Fatec";
  const [textoExibido, setTextoExibido] = useState('');
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (indice < texto.length) {
        setTextoExibido((textoAnterior) => textoAnterior + texto.charAt(indice));
        setIndice((indiceAnterior) => indiceAnterior + 1);
      } else {
        clearInterval(timer);
      }
    }, 100); // A cada 100ms, uma nova letra será exibida.

    return () => clearInterval(timer);
  }, [indice]);

  return (
    <div className="App">
      <h1>Letreiro da Fatec</h1>
      <p>{textoExibido}</p>
    </div>
  );
}

export default App;