/*Scrivi una funzione che accetti una stringa come argomento e la ritorni
girata (es. Ciao -> oaiC)*/
function wordReverse(word){
    return word.split("").reverse().join("");
}

let word = wordReverse("andrea")
console.log(word)