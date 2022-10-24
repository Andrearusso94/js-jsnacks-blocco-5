/*Crea un array di 10 oggetti che rappresentano una zucchina, 
indicandone per ognuno varietà, peso e lunghezza.
 Calcola quanto pesano tutte le zucchine.*/


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

 //calcola quanto pesano tutte le zucchine
 let pesoTot = 0;
  for (let i=0; i<zucchine.length; i++){
     pesoTot += zucchine[i].peso;
 }

 console.log(pesoTot);