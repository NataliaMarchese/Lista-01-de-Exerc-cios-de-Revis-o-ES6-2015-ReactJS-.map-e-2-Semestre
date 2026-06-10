import Card from "./Card";

function Ex09DesestruturacaoDefault() {
  const objeto = {};

  const { cor = "preto" } = objeto;

  return (
    <Card titulo="Exercício 09 - Valor Padrão">
      <p>Cor: {cor}</p>
    </Card>
  );
}

export default Ex09DesestruturacaoDefault;