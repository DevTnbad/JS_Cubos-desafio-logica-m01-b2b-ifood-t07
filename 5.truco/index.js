function solucao(carta) {
    //seu codigo aqui
    let ordem = ['Q', 'J', 'K', 'A', '2', '3'];
    let cartaIndice = ordem.indexOf(carta)
    if (cartaIndice === ordem.length -1) {
        console.log(ordem[0]);
    } else {
        console.log(ordem[cartaIndice+1])
    }
}