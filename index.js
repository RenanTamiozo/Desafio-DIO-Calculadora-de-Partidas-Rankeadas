let nome = "Renan";
let vitoria = 193;
let derrota = 95;
var level;

let saldoVitorias = calcSaldoVitorias(vitoria, derrota);

function calcSaldoVitorias(vitoria, derrota) {
  return vitoria - derrota;
}

if (saldoVitorias > 0) {
  switch (true) {
    case saldoVitorias <= 10:
      level = "Ferro";
      console.log(`O Herói ${nome} tem de saldo de ${saldoVitorias} vitórias está no nível de ${level}`);
      break;
    case saldoVitorias <= 20:
      level = "Bronze";
      console.log(`O Herói ${nome} tem de saldo de ${saldoVitorias} vitórias está no nível de ${level}`);
      break;
    case saldoVitorias <= 50:
      level = "Prata";
      console.log(`O Herói ${nome} tem de saldo de ${saldoVitorias} vitórias está no nível de ${level}`);
      break;
    case saldoVitorias <= 80:
      level = "Ouro";
      console.log(`O Herói ${nome} tem de saldo de ${saldoVitorias} vitórias está no nível de ${level}`);
      break;
    case saldoVitorias <= 90:
      level = "Diamante";
      console.log(`O Herói ${nome} tem de saldo de ${saldoVitorias} vitórias está no nível de ${level}`);
      break;
    case saldoVitorias <= 100:
      level = "Lendário";
      console.log(`O Herói ${nome} tem de saldo de ${saldoVitorias} vitórias está no nível de ${level}`);
      break;
    default:
      level = "Imortal";
      console.log(`O Herói ${nome} tem de saldo de ${saldoVitorias} vitórias está no nível de ${level}`);
      break;
  }
} else {
  console.log(`O Herói ${nome} esta com o saldo de vitórias negativo de ${saldoVitorias}, não foi possível calcular seu nível atual`);
}

console.log(`
A tabela de nível é: 
 Saldo de vitórias for menor do que 10 = Ferro
 Saldo de vitórias for entre 11 e 20 = Bronze
 Saldo de vitórias for entre 21 e 50 = Prata
 Saldo de vitórias for entre 51 e 80 = Ouro
 Saldo de vitórias for entre 81 e 90 = Diamante
 Saldo de vitórias for entre 91 e 100= Lendário
 Saldo de vitórias for maior ou igual a 101 = Imortal`)