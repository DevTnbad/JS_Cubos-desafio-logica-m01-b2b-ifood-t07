function solucao(min, km) {
    //seu codigo aqui
    let primeirosMinutos = min >= 20 ? 50 * 20 : 50 * min;
    let minutosComDesconto = min > 20 ? 30 * (min - 20) : 0;
    let primeirosKm = km >= 10 ? 70 * 10 : 70 * km;
    let kmComDesconto = km > 10 ? 50 * (km - 10) : 0;
    let total = primeirosMinutos + minutosComDesconto + primeirosKm + kmComDesconto;
    console.log(total);
}