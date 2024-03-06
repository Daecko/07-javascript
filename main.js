//cambiar estas constantes para probar
const multNum = 1;
const multLimit = 10;
const numPrime = 5;
const numFact = 5;

//Generador de Tablas de Multiplicar => Escribe una función que genere e imprima la tabla de multiplicar de un número dado hasta un límite especificado.
const multBy = (number,limit) => {
    var arr = [];
    for(let i=1;i<=limit;i++){
        arr.push(i*number);
    }
    return arr;
}
const isPrime = (number) => {
    for(let i = 2, s = Math.sqrt(number); i <= s; i++) {
        if(number % i === 0) return false;
    }
    return number > 1;
}
const findFact = (number) => {
    var res=number;
    while (number>1){
        res*=number-1;
        number--;
    }
    return res;
}
console.log(multBy(multNum,multLimit));
console.log(isPrime(numPrime) ? `${numPrime} es un número primo`:`${numPrime} no es un número primo`)
console.log(`${numFact}! es ${findFact(numFact)}`)