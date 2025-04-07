import React from "react";
import "./Header.css";

// Componente funcional Header que renderiza um cabeçalho da aplicação
const Header = () => {
  return (
    <header className="header">
      {/* Lado esquerdo do header com o título da página */}
      <div className="header-left">Imagem do Dia</div>

      {/* Lado direito do header com a marca "NASA" */}
      <div className="header-right">NASA</div>
    </header>
  );
};

export default Header;
