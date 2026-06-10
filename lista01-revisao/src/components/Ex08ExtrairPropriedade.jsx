import Card from "./Card";

function Ex08ExtrairPropriedade() {
  const cidades = [
    { nome: "São Paulo", populacao: 12000000 },
    { nome: "Rio de Janeiro", populacao: 6700000 },
    { nome: "Curitiba", populacao: 1900000 },
  ];

  const nomes = cidades.map((cidade) => cidade.nome);

  return (
    <Card titulo="Exercício 08 - Extrair Propriedade">
      <p>{nomes.join(", ")}</p>
    </Card>
  );
}

export default Ex08ExtrairPropriedade;