// ImageCard.jsx
import React from "react";
import "../styles/ImageCard.css"; // Importando estilos específicos

// Componente funcional que recebe props e exibe um "cartão" com imagem e informações da NASA
const ImageCard = ({ title, date, explanation, image }) => {
  return (
    <div className="card">
      {/* Exibe a imagem da NASA com o título como texto alternativo */}
      <img src={image} alt={title} className="nasa-image" />

      {/* Container com título, data e explicação da imagem */}
      <div className="info">
        <h2>{title}</h2>
        <p><strong>Data:</strong> {date}</p>
        <p className="explanation">{explanation}</p>
      </div>
    </div>
  );
};

export default ImageCard;
