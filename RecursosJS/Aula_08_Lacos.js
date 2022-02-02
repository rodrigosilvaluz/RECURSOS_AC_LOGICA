//Estruturas de Controle - Laços
let i, a, b;
for (i=0; i < 5; i++){
    console.log("No for loop neste momento i é igual a " + i);
}
console.log("##########");
a = 0;
while (a < 5){
    console.log("No while loop neste momento a é igual a " + a);
    a++;
}
console.log("##########");

b = 0;
do{
    console.log("No do/while loop neste momento b é igual a " + b);
    b++;
} while(b < 0);

console.log("##########");
let meuArray = [0,1,2,3,4];
meuArray.forEach(elemento => console.log("Meu elemento: " + elemento));
