vidas = 5;
pontos = 0;
navios = new Array(5).fill(null).map(() => new Array(8).fill(''));


for (g=0; g<5; g++){
    for (h=0; h<8; h++){
        it = Math.floor(Math.random() * 5);
        jt = Math.floor(Math.random() * 8);
        nv = Math.floor(Math.random() * 3);
        navios[it][jt] = nv;
    }
}

for (ext = 0; ext <5; ext++){
    for (int = 0; int < 8 ; int ++){
        if (navios[ext][int] !== ''){
            navios[ext][int] = 0
        }
        console.log(navios[ext][int] + ` posição: ${ext}, ${int}`);
    }
}

function shipOnClick(i, j) {
    if (navios[i][j] == 0) {
        const type = navios[i][j]
        ship.src = getImage("./submarino.png")
        pontos += 1;
    } else {
        let imgnavio = document.getElementById(`ship${i}, ${j}`);
        imgnavio.src = "agua.png";
        vidas -= 1;
        console.log(pontos);
        console.log(vidas);
    }
}