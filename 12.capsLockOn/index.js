function processData(input) {
    //Enter your code here
    input = input.trim();
    let primeiraLetra = input.charAt(0);
    let demaisLetras = input.slice(1);
    let tudoMinusculo = input.toLowerCase();
    let tudoMaiusculo = input.toUpperCase();
    
    if (input === tudoMaiusculo){
        console.log(tudoMinusculo);
    } else if ( primeiraLetra === primeiraLetra.toLowerCase() && demaisLetras === demaisLetras.toUpperCase() ) {
        console.log(primeiraLetra.toUpperCase()+demaisLetras.toLowerCase());
    } else {
        console.log(input);
    }
}