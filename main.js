//player pj
let warrior = {
  name: "Mozart",
  hitPoints: 10,
  hability: {
    power: 5,
    powerDescription:
      "Utilanzo ambas manos disparas FIREBALL!!(hace daño en area)",
    maxUses: 3,
  },
  meleeDmg: 3,
};
//enemy
let enemy = {
  name: "Ronald",
  hitPoints: 15,
  hability: {
    power: 2,
    powerDescription:
      "Invoca el poder divino SHINRA TENSEI!!(arrasa con todo a su paso)",
    maxUses: 2,
  },
  meleeDmg: 2,
};
//enemy combat response
function enemyResponse(num) {
  switch (num) {
    case 1:
      alert("Utiliza un hacha vieja para atacar");
      warrior.hitPoints = warrior.hitPoints - enemy.meleeDmg;
      alert("Golpea por: " + enemy.meleeDmg);

      break;
    case 2:
      alert(
        "Conjura las sombras el aura maligna que rodea su gesto, indica la preparación de un ataque oscuro y letal."
      );
      if (enemy.hability.maxUses > 0) {
        warrior.hitPoints = warrior.hitPoints - enemy.hability.power;
        enemy.hability.maxUses--;
        alert("Golpear por: " + enemy.hability.power);
      } else {
        alert(
          "Las sombras se disipan, los poderes oscuros parecen haberle abandonado."
        );
      }
      break;
    case 3:
      alert("Sacrifica una rata y se cura");
      enemy.hitPoints += 2;
      alert("*se cura 2 hp*");

      break;
    case 4:
      alert("llama dos ratas y una de ellas te ataca");
      warrior.hitPoints--;
      alert("*pierdes 1 hp *");
      alert("la segunda rata te ataca");
      warrior.hitPoints--;
      alert("*pierdes 1 hp *");
      alert("las ratas huyen al terminar los ataques");
      break;
    default:
      alert("Se distrae con el ruido de un grupo de ratas");
      alert(" baja la guardia y le atacas sin dudar");
      enemy.hitPoints = enemy.hitPoints - warrior.meleeDmg;
      alert("Golpeas por: " + warrior.meleeDmg);
  }
}
//dice 6 faces
function getRandomInt() {
  const minCeiled = Math.ceil(1);
  const maxFloored = Math.floor(7);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
//player combat moves
function pjMove(num) {
  switch (num) {
    case 1:
      alert(
        "Lanzas un feroz ataque hacia adelante, dirigiendo tu arma con toda tu fuerza y habilidad hacia tu enemigo."
      );
      enemy.hitPoints = enemy.hitPoints - warrior.meleeDmg;
      alert("Golpeas por: " + warrior.meleeDmg);
      break;
    case 2:
      alert(
        "Con un grito de desafío, lanzas la bola de fuego hacia tu enemigo, liberando su poder destructivo con un estallido ensordecedor."
      );

      if (warrior.hability.maxUses > 0) {
        enemy.hitPoints = enemy.hitPoints - warrior.hability.power;
        warrior.hability.maxUses--;
        alert("Tu bola de fuego golpea por: " + warrior.hability.power);
      } else {
        alert("La energia divina te ha abandonado");
      }
      break;
    case 3:
      alert("Arrojas una piedra");
      enemy.hitPoints--;
      alert("El enemigo se enfurece!");

      break;
    case 4:
      alert("No hace nada");
      alert("El enemigo desconfiado espera a que hagas el primer movimiento.");
      break;
    default:
      alert(
        "Te distraes, pierdes la ventaja, el enemigo aprovecha tu descuido y te ataca"
      );
      warrior.hitPoints = warrior.hitPoints - enemy.meleeDmg;
      alert("Pierdes " + enemy.meleeDmg + " hp.");
  }
}
//combat round standar
function combat() {
  do {
    alert("Tu turno! tienes: " + warrior.hitPoints + "hp");
    let move = parseInt(
      prompt(
        "tu moviemiento?(Atque frontal '1', Desencadenar poder '2', tirar piedra '3',Nada '4') te quedan: " +
          warrior.hitPoints +
          "hp"
      )
    );
    pjMove(move);
    alert("turno enemigo! tiene: " + enemy.hitPoints + "hp");
    enemyResponse(getRandomInt());
  } while (enemy.hitPoints > 0 && warrior.hitPoints > 0);
}
//!game start and paths
let start = confirm("Quieres jugar?");
if (start) {
  alert(
    `Tu eres ${warrior.name}, tienes ${warrior.hitPoints} puntos de vida y utilizas una espada corta de una mano.`
  );
  let explore = prompt(
    "En frente de ti el camino se divide, que ruta escoges, ¿izquierda o derecha? "
  );
  if (explore == "izquierda") {
    alert(
      "El aire se vuelve denso con la presencia de una amenaza oculta entre las sombras. Tu corazón late con fuerza mientras tus sentidos se agudizan, preparándote para el combate que se avecina."
    );
    alert(
      "De entre las sombras emerge una figura oscura, moviéndose con sigilo y determinación. Sus ojos brillan con malicia mientras te observa con una mezcla de desafío y amenaza."
    );

    let attack = confirm("Te predispones a atacar ? ");

    if (attack) {
      alert(
        "Avanzas hacia el con paso firme, manteniendo postura defensiva mientras observas cada movimiento de tu adversario."
      );
      let advantage = parseInt(
        prompt(
          "Tu adversario parece distraido, tienes ventaja, que ataque usas ? (Sigilo'1',Atque frontal'2', Desencadenar poder'3', Tirar piedra'4')"
        )
      );
      if (advantage == 1) {
        alert(
          `El sonido de mi ataque es apenas un susurro en la oscuridad, apenas perceptible para mi enemigo hasta que es demasiado tarde.(golpeas por "${
            warrior.meleeDmg * 2
          }")`
        );
        enemy.hitPoints -= warrior.meleeDmg * 2;
        alert("Sigues con ventaja");
        combat();
        if (enemy.hitPoints == 0) {
          alert(
            "Con mis enemigos neutralizados, me retiro de nuevo a las sombras, listo para enfrentar cualquier desafío que pueda surgir en mi camino."
          );
        } else {
          alert(
            "Aunque la batalla haya sido perdida, la guerra aún no ha terminado. Reitentar => f5"
          );
        }
      } else if (advantage == 2) {
        alert(
          "Lanzas un feroz ataque hacia adelante, dirigiendo tu arma con toda tu fuerza y habilidad hacia tu enemigo."
        );
        enemy.hitPoints = enemy.hitPoints - warrior.meleeDmg;
        alert("Golpeas por: " + warrior.meleeDmg);
        combat();
        if (enemy.hitPoints == 0) {
          alert(
            "Con mis enemigos neutralizados, me retiro de nuevo a las sombras, listo para enfrentar cualquier desafío que pueda surgir en mi camino."
          );
        } else {
          alert(
            "Aunque la batalla haya sido perdida, la guerra aún no ha terminado. Reitentar => f5"
          );
        }
      } else if (advantage == 3) {
        alert(
          "Una esfera incandescente comienza a formarse entre mis palmas, creciendo en intensidad y tamaño con cada momento que pasa. El calor que emana de ella es abrasador, iluminando la oscuridad que nos rodea con un resplandor anaranjado y danzante."
        );
        enemy.hitPoints -= warrior.hability.power;
        warrior.hability.maxUses--;
        alert("Golpeas por: " + warrior.meleeDmg);
        combat();

        if (enemy.hitPoints == 0) {
          alert(
            "Con mis enemigos neutralizados, me retiro de nuevo a las sombras, listo para enfrentar cualquier desafío que pueda surgir en mi camino."
          );
        } else {
          alert(
            "Aunque la batalla haya sido perdida, la guerra aún no ha terminado. Reitentar => f5"
          );
        }
      } else if (advantage == 4) {
        alert(
          "La piedra vuela a través del aire con velocidad, encontrando su objetivo con un golpe certero. El sonido sordo de impacto resuena en la caverna mientras mi enemigo retrocede, aturdido por el golpe inesperado."
        );
        alert("¡el enemigo se enfurece, aumenta su poder en al doble!");
        enemy.hability.power += 2;
        combat();
        if (enemy.hitPoints == 0) {
          alert(
            "Con mis enemigos neutralizados, me retiro de nuevo a las sombras, listo para enfrentar cualquier desafío que pueda surgir en mi camino."
          );
        } else {
          alert(
            "Aunque la batalla haya sido perdida, la guerra aún no ha terminado. Reitentar => f5"
          );
        }
      } else {
        alert("Tu indescicion te llevo a la ruina :_ ");
        alert(
          " un grupo de ratas te capturan y te llevan a lo mas profundo de las sombras !... Reintentar => f5"
        );
      }
    }
  } else if (explore == "derecha") {
    alert(
      "¡Felicidades aventurero! Has descubierto un tesoro oculto, pero lamentablemente, está custodiado por dos feroces ratas."
      );
      if(confirm("¿tratas de tomar el tesoro ?")){
        alert("Después de una ardua batalla, logro vencer a las feroces ratas que custodiaban el tesoro. Con precaución, me acerco al cofre antiguo, cuyo brillo promete riquezas olvidadas.")
      }
  } else {
    alert(
      "Después de un momento de reflexión, decides seguir tu instinto y tomar una dirección aleatoria, confiando en tu intuición para guiarte. Con cada paso que das, trato de mantener la esperanza viva y la determinación fuerte, sabiendo que eventualmente encontraré mi camino de regreso a la luz del día. Nunca mas se volvio a saber del aventurero."
    );
  }
}
else{
    alert("Que los vientos del destino te guíen hacia nuevas aventuras, y que nuestros caminos vuelvan a cruzarse en algún momento futuro.")
}
