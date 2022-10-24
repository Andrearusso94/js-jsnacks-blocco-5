/*Crea un array di 10 oggetti che rappresentano una zucchina. 
Dividi in due array separati le zucchine che misurano meno o più di 15cm. 
Infine stampa separatamente quanto pesano i due gruppi di zucchine*/
//creo array 10 zucchibe
let zucchine = [
    {
                varieta: 'romanseche con fiore',
                peso: 5,
                lunghezza: 11
             },
             {
                varieta: 'verdi',
                peso: 25,
                lunghezza: 13
             },
             {
                varieta: 'verdi',
                peso: 5,
                lunghezza: 18
             },
             {
                varieta: 'romanseche con fiore',
                peso: 15,
                lunghezza: 8
             },
             {
                varieta: 'romanseche con fiore',
                peso: 5,
                lunghezza: 8
             },
             {
                varieta: 'verdi',
                peso: 25,
                lunghezza: 12
             },
             {
                varieta: 'verde con fiore',
                peso: 5,
                lunghezza: 14
             },
             {
                varieta: 'spagnole',
                peso: 15,
                lunghezza: 16
             },
             {
                varieta: 'romanesche',
                peso: 5,
                lunghezza: 10
             },
             {
                varieta: 'romanesche',
                peso: 10,
                lunghezza: 18
             },

 ]

 // Dividi in due array separati le zucchine che misurano meno o più di 15cm. 

const zucchineMin = [];
const zucchineMax = [];
for(var i=0; i<zucchine.length; i++){
    if (zucchine[i].lunghezza < 15){
        zucchineMin.push(zucchine[i])
    } else {
        zucchineMax.push(zucchine[i])
    }
}
 console.log(zucchineMin);
 console.log(zucchineMax);

 // Stampa separatamente quanto pesano i due gruppi di zucchine
//calcolo peso zucchinemin
pesoMin = 0;
for(let i=0; i<zucchineMin.length; i++){
    pesoMin += zucchineMin[i].peso
}
console.log('Il peso delle zucchine è ' + pesoMin + 'kg');

//calcolo peso zucchine lunghe
pesoMax = 0;
for(var i=0; i<zucchineMax.length; i++){
    pesoMax += zucchineMax[i].peso
}
console.log('Il peso zucchine è ' + pesoMax + 'kg');