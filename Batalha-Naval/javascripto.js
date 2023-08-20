vidas = 5;
pontos = 0;
navios = [];

for (g=0; g<5; g++){
    for (h=0; h<8; h++){
        it = Math.floor(Math.random() * 5);
        jt = Math.floor(Math.random() * 8);
        nv = Math.floor(Math.floor() * 3);
        navios[it][jt] = nv;
    }
}

for (ext = 0; ext <5; ext++){
    for (int = 0; int < 8 ; int ++){
        if (navios[ext][int] !== ''){
            navios[ext][int] = 0
        }
    }
}

function shipOnClick(i, j) {
    if (navios[i][j] !== 0 || navios[i][j] !== '') {
        if (navios[i][j] == 1) {
            let imgnavio = document.getElementById(`navio${i}, ${j}`);
            imgnavio.src = "submarino.png";
            pontos += 1;
            console.log(pontos);
        } else if (navios[i][j] == 2) {
            let imgnavio = document.getElementById(`navio${i}, ${j}`);
            imgnavio.src = "navio2.png";
            pontos += 2;
            console.log(pontos);
        } else if (navios[i][j] == 3) {
            let imgnavio = document.getElementById(`navio${i}, ${j}`);
            imgnavio.src = "navio1.png";
            pontos += 3;
            console.log(pontos);
        }

    }
}