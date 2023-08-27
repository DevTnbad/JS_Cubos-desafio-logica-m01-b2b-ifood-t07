function solucao(lista) {
  //seu codigo aqui
  let soma = lista.reduce( (a, b) => {
      return a + b;
  })
  let media = soma / lista.length;
  console.log(media);

}