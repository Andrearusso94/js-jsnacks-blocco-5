/*Scrivi una funzione che fonda due array (aventi lo stesso numero di
elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].*/

const firstArr = ['andrea', 'russo', '27', 'roma'];
const secondArr = [1, 2, 27, 501];

//creo altro array dove inserire gli elementi dei primi due

let thirdArr = [];

//ciclo gli elementi dentro il nuovo array

for (let i = 0; i < firstArr.length; i++) {
    thirdArr.push(firstArr[i]);
    thirdArr.push(secondArr[i]);
    
}

console.log(thirdArr)