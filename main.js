// salvo in due variabili i due bottoi
var btn_genera = document.getElementById('genera');
var btn_annulla = document.getElementById('annulla');

// aggiungo levent listener al bottone genera tramite la variabile
btn_genera.addEventListener("click", function(){
  // dichiaro variabile codice cp e carrozza e assegno un numero random
  var codice_cp = Math.floor(Math.random() * 10000);
  var carrozza = Math.floor(Math.random() * 10);
  // dichiaro variabile del prezzo e del prezzo approssimato e eta
  var prezzo, prezzoApprossimato, eta, kmPercorso, nome;

  // valorizzo eta offerta e kmPercorso in base agli elementi presenti in pagina
  eta = document.getElementById('select').value;
  kmPercorso = document.getElementById('kmPercorso').value;
  nome = document.getElementById('nome').value;

  // calcolo il prezzo del biglietto
  if(eta == "Minorenni"){
    prezzo = (kmPercorso*0.21)-((kmPercorso*0.21)*20)/100;
  }else if (eta == "Over-65") {
    prezzo = (kmPercorso*0.21)-((kmPercorso*0.21)*40)/100;
  }else if(eta == "Maggiorenni"){
    prezzo = kmPercorso * 0.21;
  }
  // approssimo il prezzo per difetto se non è gia un numero intero e tengo solo 2 cifre decimali
  if (!Number.isInteger(prezzo)) {
    prezzoApprossimato = Math.floor(prezzo * 100) / 100;
    prezzoApprossimato = prezzoApprossimato.toFixed(2);

  }else{
    prezzoApprossimato = prezzo;
  }
  // aggiungo la classe per far apparire la sezione
  document.getElementById('contenitore-biglietto').className = "show";
  // stampo a schermo i risultati
  document.getElementById('prezzo').innerHTML = prezzoApprossimato + "$";
  document.getElementById('offerta').innerHTML = eta;
  document.getElementById('carrozza').innerHTML = carrozza;
  document.getElementById('codice-cp').innerHTML = codice_cp;
  document.getElementById('nome-U').innerHTML = nome;
})


// aggiungo levent listener al bottone annulla tramite la variabile
btn_annulla.addEventListener("click", function(){
  // annullo valore delle variabili
  var codice_cp = null;
  var carrozza = null;
  // dichiaro variabile del prezzo e del prezzo approssimato e eta
  var prezzo, prezzoApprossimato, eta, kmPercorso, nome;

  // annullo valore delle variabili
  eta = null;
  kmPercorso = null;
  nome = null;
  prezzo = null;
  prezzoApprossimato = null;
  document.getElementById('nome').value = nome;
  document.getElementById('kmPercorso').value = kmPercorso;
  // aggiungo la classe per far scomparire la sezione
  document.getElementById('contenitore-biglietto').className = "hide";
})
