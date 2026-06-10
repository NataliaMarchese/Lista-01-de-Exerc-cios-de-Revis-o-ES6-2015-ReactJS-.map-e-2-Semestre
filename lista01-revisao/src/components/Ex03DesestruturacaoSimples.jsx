import Card from "./Card";

function Ex03DesestruturacaoSimples() {
  const frutas = ["Maçã", "Banana"];

  const [f1, f2] = frutas;

  return (
    <Card titulo="Exercício 03 - Desestruturação Simples">
      <p>Primeira fruta: {f1}</p>
      <p>Segunda fruta: {f2}</p>
    </Card>
  );
}

export default Ex03DesestruturacaoSimples;