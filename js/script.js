var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsamo", "Verdi"];

var btn = document.getElementById('btn');

btn.addEventListener("click", function () {
  var cognome = document.getElementById('cognome').value;
  cognomi.push(cognome);
  cognomi = cognomi.sort();

  for (var i = 0; i < cognomi.length; i++) {
    document.getElementById('list').innerHTML += "<li>" + cognomi[i] + "</li>";
  }


});
