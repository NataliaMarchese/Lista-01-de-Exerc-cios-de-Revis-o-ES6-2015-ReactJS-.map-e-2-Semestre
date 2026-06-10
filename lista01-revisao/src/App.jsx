import "./App.css";

import Ex01DobrarValores from "./components/Ex01DobrarValores";
import Ex02NomesProprios from "./components/Ex02NomesProprios";
import Ex03DesestruturacaoSimples from "./components/Ex03DesestruturacaoSimples";
import Ex04TrocaVariaveis from "./components/Ex04TrocaVariaveis";
import Ex05ObjetoPessoa from "./components/Ex05ObjetoPessoa";
import Ex06MapComParametros from "./components/Ex06MapComParametros";
import Ex07ConversaoString from "./components/Ex07ConversaoString";
import Ex08ExtrairPropriedade from "./components/Ex08ExtrairPropriedade";
import Ex09DesestruturacaoDefault from "./components/Ex09DesestruturacaoDefault";
import Ex10RestOperatorBasico from "./components/Ex10RestOperatorBasico";

function App() {
  return (
    <div className="container">
      <h1>Arrays e Desestruturação</h1>

      <div className="cards-grid">
        <Ex01DobrarValores />
        <Ex02NomesProprios />
        <Ex03DesestruturacaoSimples />
        <Ex04TrocaVariaveis />
        <Ex05ObjetoPessoa />
        <Ex06MapComParametros />
        <Ex07ConversaoString />
        <Ex08ExtrairPropriedade />
        <Ex09DesestruturacaoDefault />
        <Ex10RestOperatorBasico />
      </div>
    </div>
  );
}

export default App;