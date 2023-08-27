function solucao(min, max, valores) {
    //seu codigo aqui
      let permitido = valores.filter( numero => {
          return numero >= min && numero <= max;
      });
      console.log(permitido);
}