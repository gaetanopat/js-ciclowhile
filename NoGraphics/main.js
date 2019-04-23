// creo un array contenente i Cognomi
var arr_surname = ['Patierno','Rossi','Biotti','Riccardi','Ballacci','Martino','Praino'];
// chiedo in input un cognome all'utente
var surname = prompt('Inserisci un cognome');

// creo una variabile booleana per vedere se esiste o meno
var trovato = false;

// variabile contatore
var i = 0;
// controllo che non sia già presente nell'array
while (i < arr_surname.length){
  if(arr_surname[i] == surname){
    trovato = true;
  }
  i++;
}

// se è presente allora ordino soltanto l'array senza aggiungere nulla
if (trovato == true){
  document.writeln('Il cognome inserito è già presente nella lista <br>');
}
// se non è presente allora lo aggiungo e poi ordino l'array
else{
  // chiedo all'utente se vuole aggiungerlo
  var risposta = prompt('Vuoi aggiungerlo?');
  // se l'utente dice sì allora lo aggiungo
  if(risposta == 'si' || risposta == 'Si' || risposta == 'sì' || risposta == 'Sì' || risposta == 'SI'){
    // aggiungo il nuovo cognome all'array
    arr_surname.push(surname);

    document.writeln('Array non ordinato: <br>');
    // per visualizzare un nome sotto l'altro
    for (i = 0; i < arr_surname.length; i++){
      document.writeln(arr_surname[i] + '<br>');
    }
    // per vedere l'indice iniziale, prima dell'ordinamento
    document.writeln('<br> Posizione iniziale nuovo cognome inserito: ' + arr_surname.indexOf(surname) + '<br>');

    document.writeln('<br> Array ordinato: <br>');
    // per ordinare in ordine alfabetico l'array cognomi
    arr_surname.sort();
    // per visualizzarli uno sotto l'altro in ordine alfabetico
    for (i = 0; i < arr_surname.length; i++){
      document.writeln(arr_surname[i] + '<br>');
    }
    // per vedere l'indice aggiornato
    document.writeln('<br> Posizione nuovo cognome inserito dopo l\'ordinamento: ' + arr_surname.indexOf(surname));
  }
  // altrimenti l'array sarò invariato
  else{
    document.writeln('Array Invariato <br><br>');

    document.writeln('Array non ordinato: <br>');
    // per visualizzare un nome sotto l'altro
    for (i = 0; i < arr_surname.length; i++){
      document.writeln(arr_surname[i] + '<br>');
    }
    document.writeln('<br> Array ordinato: <br>');
    // per ordinare in ordine alfabetico l'array cognomi
    arr_surname.sort();
    // per visualizzarli uno sotto l'altro in ordine alfabetico
    for (i = 0; i < arr_surname.length; i++){
      document.writeln(arr_surname[i] + '<br>');
    }
  }
}
