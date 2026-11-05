// 1. Al click su "Aggiungi" (o premendo Invio) aggiungi un elemento alla lista
//    con il testo inserito nell'input.
const btnAdd = document.getElementById("btn-aggiungi");
const listaSpesa = document.getElementById("lista");
const prodIn = document.getElementById("item");

function addProduct(){
    //crea nuovo <li> vuoto
    const prodotto = document.createElement("li");

    const btnRemove = document.createElement("button");
    btnRemove.textContent = "X";

    btnRemove.addEventListener("click", ()=>{
        prodotto.remove();
    })

    //riempio il <li> con quanto inserito dall'utente
    prodotto.textContent = prodIn.value;
    //aggiungi il <li> alla lista
    prodotto.append(btnRemove);
    listaSpesa.append(prodotto);
    //ripulisci l'input
    prodIn.value="";
}
btnAdd.addEventListener("click",addProduct);
// 2. Ogni elemento deve avere un bottone "Rimuovi" che lo elimina dalla lista.
// 3. Se l'input è vuoto, mostra un messaggio di errore e non aggiungere nulla.
// 4. (Bonus) Al click sul testo dell'elemento, barralo come "fatto".



