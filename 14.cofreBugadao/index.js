function processData(input) {
    //Enter your code here
    let senhaCorreta = input.trim().split("\n")[0];
    let palavraDigitada = input.trim().split("\n")[1];
    let indice = 0;
    let validador = '';
    for (letra of palavraDigitada) {
        if (senhaCorreta[indice] === letra) {
            validador += letra;
            indice++;
        }
    }
    if (validador === senhaCorreta) {
        console.log('SIM');
    } else {
        console.log('NAO')
    }
}