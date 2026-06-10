import Card from "./Card";

function Ex10RestOperatorBasico() {
  const numeros = [10, 20, 30, 40];

  const [primeiro, ...outros] = numeros;

  return (
    <Card titulo="Exercício 10 - Rest Operator">
      <p>Primeiro: {primeiro}</p>
      <p>Outros: {outros.join(", ")}</p>
    </Card>
  );
}

export default Ex10RestOperatorBasico;