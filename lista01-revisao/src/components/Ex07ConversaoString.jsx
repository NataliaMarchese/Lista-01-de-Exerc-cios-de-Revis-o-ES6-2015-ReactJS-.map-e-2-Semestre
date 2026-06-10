import Card from "./Card";

function Ex07ConversaoString() {
  const numeros = [10, 20, 30];

  const strings = numeros.map((n) => String(n));

  return (
    <Card titulo="Exercício 07 - Conversão para String">
      <p>{strings.join(", ")}</p>
    </Card>
  );
}

export default Ex07ConversaoString;