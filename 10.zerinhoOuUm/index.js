function solucao(jogadores) {
    //seu codigo aqui
   let jogadasZero = jogadores.filter( jogador => {
        return jogador.jogada === 0;
    })
    let jogadasUm = jogadores.filter( jogador => {
        return jogador.jogada === 1;
    })
    
    if(jogadasZero.length === 1) {
        console.log(jogadasZero[0].nome);
    } else if (jogadasUm.length === 1) {
        console.log(jogadasUm[0].nome);
    } else {
        console.log('NINGUEM');
    }
}