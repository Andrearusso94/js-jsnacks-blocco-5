/*Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione
compresa tra “a” e “b”*/

//creo funzione con i 3 argomenti (arr e num , num)



function myArr (arr, firstNum, secondNum) {
    
    //creo primo array
    const newArr = [];

    for (let i = 0; i < 10; i++) {
       
        //chiedo se il numero a è più piccolo di b e inserisco l'eventuale numero dentro l'array

        if (firstNum < arr[i] && secondNum >= arr[i]) {
            newArr.push(arr[i]);
        }
        
    }
    return newArr
    
} 

//creo secondo array
const firstArr =[];

for (let i = 1; i <= 10; i++) {
    firstArr.push(i);
    
}


//creo variabili numeriche
const numA = 4;
const numB = 8;

const newArr = myArr(firstArr, numA, numB)
console.log(newArr)