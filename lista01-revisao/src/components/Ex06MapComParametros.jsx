import Card from "./Card";

function Ex06MapComParametros() {
  const valores = ["A", "B", "C"];

  const resultado = valores.map(
    (valor, indice) => `Índice ${indice}: Valor ${valor}`
  );

  return (
    <Card titulo="Exercício 06 - Map com Índice">
      {resultado.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </Card>
  );
}

export default Ex06MapComParametros;