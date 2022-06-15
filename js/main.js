var email = document.getElementById('email');
var password = document.getElementById('password');

var btn = document.getElementById('btn');

btn.addEventListener('click', function(e) { // instancia del evento
    e.preventDefault(); // Desactiva el comportamiento por defecto del evento
    console.log(email.value);
    console.log(password.value);
})

