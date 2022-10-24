/*Bonus:
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, 
una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.*/

const users = [
    {
        nome: 'andrea',
        cognome: 'russo',
        età: 27,
    },
    {
        nome: 'alessio',
        cognome: 'russo',
        età: 19,
    },
    {
        nome: 'silvio',
        cognome: 'russo',
        età: 57,
    },
]

const usersCar = [];

for (let i = 0; i < users.length; i++){
    if (users[i].età >= 20){
        usersCar.push(users[i])
    console.log(users[i].nome + users[i].cognome + 'tu puoi guidare')
    }

}
