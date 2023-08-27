function solucao(texto) {
    // Seu codigo aqui
    const quantidadePalavras = texto.trim().split(" ").filter( (palavra) => {
        return palavra !== "";
    })
    console.log(quantidadePalavras.length);
}