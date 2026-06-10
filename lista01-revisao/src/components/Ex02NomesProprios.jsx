import Card from "./Card";

function Ex02NomesProprios() {
  const nomes = ["Natalia", "Vera", "Felipe"];

  const nomesFormatados = nomes.map(
    (nome) => nome.charAt(0).toUpperCase() + nome.slice(1)
  );

  return (
    <Card titulo="Exercício 02 - Nomes Próprios">
      <p>{nomesFormatados.join(", ")}</p>
    </Card>
  );
}

export default Ex02NomesProprios;