var readline= require('readline-sync');
console.log(" ___ Passagens Aéreas ____");

    console.log("|-------------------------|")
    console.log("| 1 - Comprar passagem    |")
    console.log("| 2 - Consultar voos      |")
    console.log("| 3 - Mapa de assentos    |")
    console.log("| 4 - Emitir ticket       |")
    console.log("| 0 - Encerrar o programa |")
    console.log("|-------------------------|")     

while(op != 0){
    var op= readline.question("Escolha uma opcao: ")
    var ticket = false 
if(op==1){
    console.log("_________________ Passagens Aéreas _________________")
    console.log ("Voce esta em -> Comprar passagem")
    var nome= readline.question('Digite seu nome: ');
    var sobrenome= readline.question('Digite seu sobrenome: ');
    var idade= readline.question('Digite sua idade: ');
    var origem= console.log('Origem : Presidente Prudente ');

    var destino= readline.question('\n Opcoes de destino: \n -Rio de Janeiro \n -Italia \n -Sao Paulo \n -Bahia \n \nDigite seu destino: '); 

    var destinoValido = false
    while(destinoValido == false){

    if(destino == "Rio de Janeiro" || destino == "Italia" || destino == "São Paulo" || destino == "Bahia"){
    destinoValido = true
    }
    if(destinoValido == false){
        console.log("Você digitou errado")
        destino = readline.question("  Digite seu destino: ")
        }
        }

    var assento= readline.question('\nOpcoes de assento \n A1 A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 A12\n B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 B11 B12 \n \nEscolha seu assento: ')
    var assentoValido = false
    while(assentoValido == false){
        for(let index = 1; index < 13; index ++){
            if(assento == "A" + index || assento == "B" + index){
                assentoValido = true
            }
        }
        if(assentoValido == false){
            console.log("Esse assento não é valido")
            assento = readline.question("Escolha seu assento: ")
        }

    } 

    console.log("_________________ Passagens Aéreas _________________\n")
    console.log ("Voce esta em -> Comprar passagem\n")
    console.log("*Resumo da compra*\n")
    console.log("Cliente: "+nome+" "+sobrenome+"\n"+"Idade: "+idade+"\n"+"Assento: "+assento+"\n"+"Origem: Presidente Prudente "+"\n"+"Destino: "+destino)
    console.log("Status do voo: Confimado ")
    console.log("Valor: R$3.500,00")
}
if(op==2){
    console.log("_________________ Passagens Aéreas _________________")
    console.log("  Você está em -> Consulta de Voos                  ")
    console.log("  Origem                 X                 Destino  ")
    console.log("____________________________________________________")
    console.log("  Presidente Prudente                      Rio de Janeiro  ")
    console.log("  Presidente Prudente                      Italia  ")
    console.log("  Presidente Prudente                      São Paulo  ")
    console.log("  Presidente Prudente                      Bahia  \n")
}

if(op==3){
console.log("_________________ Passagens Aéreas _________________")
console.log("  Você está em -> Mapa de assentos                  ")
console.log("____________________________________________________")
console.log("       A1 A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 A12       ")
console.log("       B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 B11 B12       ")
var assentoA = ""
var assentoB = ""


console.log('')
console.log('_________________ Passagens Aéreas _________________')
console.log("você esta em --> Mapa de Assentos")
console.log("____________________________________________________")
for(var to = 1;to < 13; to ++){

   var assenA = "A"+to
   var assenB = "B"+to

   if( assenA == assento){
        assentoA += " X "
        assentoB += assenB + " "
   }
   else if(assenB == assento){
        assentoB += " X "
        assentoA += assenA + " "
   }
   else{
        assentoA += assenA + " "
        assentoB += assenB + " "
   }
}    
console.log(assentoA)
console.log(assentoB)

console.log("____________________________________________________")
}

if(op==4){
console.log("_________________ Passagens Aéreas _________________")
console.log("  Você está em -> Emitir Tickets                    ")
console.log("______________________________________________________")
console.log(" Obrigado por viajar conosco!                       ")
console.log(" Cliente: " +nome +" "+ sobrenome                        )
console.log(" Idade: " +idade  + "  Assento: " +assento)
console.log(" Origem/Destino>  Presidente Prudente > "+ destino                 )
console.log(" Status do voo: Confirmado                ")
console.log("                                                    ")
console.log("______________________________________________________")

}
}
