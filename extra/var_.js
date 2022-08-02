export let jugadaPlayer = document.querySelector("#move-p1")
export let jugadaCPU = document.querySelector("#move-cpu")

export let puntajePlayer = document.querySelector("#p1-score")
export let puntajeCPU = document.querySelector("#cpu-score")

export let resultadoJugada = document.querySelector("#resultado")

export let jugarPiedra = document.querySelector("#piedra")
export let jugarPapel = document.querySelector("#papel")
export let jugarTijera = document.querySelector("#tijera");

export let jugadasPosibles = [jugarPiedra, jugarPapel, jugarTijera]

export class juegoAncestral {
    hacerJugada(e){
        jugadaPlayer.textContent = e.textContent
    }
    juegaCPU() {
        resultadoJugada.textContent="yan-ken-po"
        let jugada = 0 ;
        function numRan(min, max) { 
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
        jugada = numRan(1,100);
        if (jugada <= 33){
            jugadaCPU.textContent = "Piedra"
        } else if (jugada >33 && jugada <= 66 ){
            jugadaCPU.textContent = "Papel"
        } else {
            jugadaCPU.textContent = "Tijera"
        }
    }
    puntoP1() {
        puntajePlayer.textContent = parseInt(puntajePlayer.textContent) + 1;
        resultadoJugada.textContent = "¡ganas!";
    }
    puntoCPU() {
        puntajeCPU.textContent = parseInt(puntajeCPU.textContent) + 1;
        resultadoJugada.textContent = "¡pierdes!"
    }
    empate() {
        resultadoJugada.textContent = "empate"
    }
    evaluar(){
        if (puntajePlayer.textContent =="3" || puntajeCPU.textContent == "3"){
            alert('juego terminado')
        }
    }
    jugar() {
        this.juegaCPU();
        let p1 = jugadaPlayer.textContent
        let cpu = jugadaCPU.textContent
        if(p1 === "Piedra"){
            switch(cpu){
                case "Piedra":
                    this.empate();
                    break;
                case "Papel":
                    this.puntoCPU();
                    break;
                case "Tijera":
                    this.puntoP1();
                    break;
            }
        }
        if(p1 === "Papel"){
            switch(cpu){
                case "Piedra":
                    this.puntoP1();
                    break;
                case "Papel":
                    this.empate();
                    break;
                case "Tijera":
                    this.puntoCPU();
                    break;  
            }
        }
        if(p1 === "Tijera"){
            switch(cpu){
                case "Piedra":
                    this.puntoCPU();
                    break;
                case "Papel":
                    this.puntoP1();
                    break;
                case "Tijera":
                    this.empate();
                    break;
            }
        }
        this.evaluar();
        }
}
