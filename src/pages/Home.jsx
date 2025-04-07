import React, { useEffect, useState } from "react";
import "./Home.css";

// Componente funcional Home responsável por buscar e exibir a imagem do dia da NASA
const Home = () => {
  const [data, setData] = useState(null); // Estado para armazenar os dados da API

  // useEffect é usado para buscar os dados da NASA assim que o componente for montado
  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => res.json())       // Converte a resposta para JSON
      .then((result) => setData(result)); // Armazena os dados recebidos no estado
  }, []);

  // Exibe uma mensagem de carregamento enquanto os dados ainda não foram carregados
  if (!data) {
    return <p className="loading">Carregando imagem...</p>;
  }

  // Renderiza os dados da imagem: URL, título, explicação e data
  return (
    <div className="home">
      <img src={data.url} alt={data.title} className="home-image" />
      <h2 className="home-title">{data.title}</h2>
      <p>{data.explanation}</p>
      <p className="image-date">📅 {data.date}</p>
    </div>
  );
};

export default Home;
