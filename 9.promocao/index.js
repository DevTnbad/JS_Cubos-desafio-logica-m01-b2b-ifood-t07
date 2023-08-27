function solucao(precos) {
    //seu codigo aqui
      let soma = precos.reduce( (acc, atual) => {
          return acc + atual;
      });
      let menorPrecoComDesconto = Math.min(...precos) * 0.5;
      let total = precos.length >= 3 ? soma - menorPrecoComDesconto : soma;
      console.log(total);
    
  }