import Card from "./Card";

function Ex05ObjetoPessoa() {
  const pessoa = {
    nome: "Natalia",
    idade: 27,
  };

  const { nome } = pessoa;

  return (
    <Card titulo="Exercício 05 - Objeto Pessoa">
      <p>Nome: {nome}</p>
    </Card>
  );
}

export default Ex05ObjetoPessoa;