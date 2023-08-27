function solucao(lista) {
    // seu codigo aqui
      let adultos = lista.filter( (x) => {
          return x >= 18;
      });
      adultos.length > 0 ? console.log(Math.min(...adultos)) : console.log("CRESCA E APARECA");
  }