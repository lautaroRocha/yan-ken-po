import {juegoAncestral, jugadaPlayer, jugarPiedra, jugarPapel, jugarTijera } from './extra/var_.js'

let yankenpo = new juegoAncestral();

jugarPiedra.addEventListener('click', () =>{
    jugadaPlayer.textContent = "Piedra";
    yankenpo.jugar()
})
jugarPapel.addEventListener('click', () =>{
    jugadaPlayer.textContent = "Papel"  
    yankenpo.jugar();  
})
jugarTijera.addEventListener('click', () =>{
    jugadaPlayer.textContent = "Tijera" 
    yankenpo.jugar()
})
