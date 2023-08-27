function solucao(numeros) {
    // seu codigo aqui
   let soma = numeros.reduce( (a, b) => {
       return a + b;
   })
   if ( soma % numeros.length === 0) {
       console.log(numeros.length);
   } else {
       console.log(soma % numeros.length);
   }
}