function processData(input) {
    //Enter your code here
    const linhas = input.trim().split("\n");
    const numeroDeFuncionarios = parseInt(linhas[0]);
    const coordenadas = [];
    for (let i = 1; i <= numeroDeFuncionarios; i++) {
        const coord = linhas[i].split(" ");
        coordenadas.push({
            x: parseFloat(coord[0]),
            y: parseFloat(coord[1])
        });
    }
    
    let maiorDistancia = 0;
    coordenadas.forEach((funcionarioA) => {
        coordenadas.forEach((funcionarioB) => {
            const distancia = Math.sqrt((funcionarioA.x - funcionarioB.x) ** 2 + (funcionarioA.y - funcionarioB.y) ** 2);
            maiorDistancia = Math.max(maiorDistancia, distancia);
        });
    });
    
    console.log(maiorDistancia);
}