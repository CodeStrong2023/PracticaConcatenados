 // Función 
 function numeroRandom(min, max){
    num =  Math.floor(Math.random() * (max - min + 1) + min);
    return num;
 }

 function eleccion(jugada){
     let resultado = "";
     if(jugada == 1){
         resultado = "Piedra✊";
     }else if (jugada == 2){
         resultado = "Papel✋";
     }else if (jugada == 3){
         resultado = "Tijera✌️";
     }else {
         resultado = "No eligió nada :(";
     }

     return resultado;
 }

 // 1 sera piedra, 2 papel y 3 tijera
 let jugador = 0;
 let pc = 0
 let triunfos = 0;
 let perdidas = 0;
 

 while(triunfos < 3 && perdidas < 3){
     pc = numeroRandom(1, 3);
     jugador = prompt("Elige : 1 piedra, 2 papel, 3 tijera");
 

    //alert("Elige jugador" + jugador)
    
    alert("PC elige: " + eleccion(pc))
    alert("Tu eliges: " + eleccion(jugador))

    // combate 
    if (pc == jugador){
        alert("Has empatado :|");
    } else if (jugador == 1 && pc == 3){    
        alert("Has ganado :)");
        triunfos += 1;
    } else if (jugador == 2 && pc == 1){           
        alert("Has ganado :)");
        triunfos += 1;
    } else if (jugador == 3 && pc == 2){           
        alert("Has ganado :)");
        triunfos += 1;
    }else {
        alert("Perdiste :(")
        perdidas += 1;
    }

    alert("Ganaste " + triunfos + " veces." + " Perdiste " + perdidas + " veces.");
 }