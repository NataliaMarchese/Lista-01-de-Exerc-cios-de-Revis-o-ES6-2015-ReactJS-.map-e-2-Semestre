import Card from "./Card";

function Ex04TrocaVariaveis() {
  let a = 1;
  let b = 2;

  [a, b] = [b, a];

  return (
    <Card titulo="Exercício 04 - Troca de Variáveis">
      <p>a = {a}</p>
      <p>b = {b}</p>
    </Card>
  );
}

export default Ex04TrocaVariaveis;