import Card from "./Card";

function Ex01DobrarValores() {
  const numeros = [1, 2, 3, 4, 5];

  const dobrados = numeros.map((n) => n * 2);

  return (
    <Card titulo="Exercício 01 - Dobrar Valores">
      <p>{dobrados.join(", ")}</p>
    </Card>
  );
}

export default Ex01DobrarValores;