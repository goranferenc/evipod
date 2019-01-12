// Skrivanje svih alert-ova nakon X sekundi
$(".alertFadeout").delay(3000).fadeOut();

// Auto-start anonimna funkcija
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        // Provjera da li se lozinke poklapaju u registracijskoj formi (client-side)
        var registrationPass = document.getElementById('registrationPass');
        var registrationPassConfirm = document.getElementById('registrationPassConfirm');
        if (registrationPass && registrationPassConfirm) {
          if (registrationPass.value != registrationPassConfirm.value) {
            registrationPassConfirm.setCustomValidity('Lozinke moraju biti jednake.');
          } else {
            registrationPassConfirm.setCustomValidity('');
          }
        }

        // Provjera da li se lozinke poklapaju u formi za resetiranje lozinke (client-side)
        var resetPass = document.getElementById('pwdResetConfirm');
        var resetPassConfirm = document.getElementById('pwdResetConfirmRepeat');
        if (resetPass && resetPassConfirm) {
          if (resetPass.value != resetPassConfirm.value) {
            resetPassConfirm.setCustomValidity('Lozinke moraju biti jednake.');
          } else {
            resetPassConfirm.setCustomValidity('');
          }
        }

        // Provjera da li postoje greske sa form input-ima
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
        console.log('Submit pressed!');
      }, false);
    });

    // Progress bar za alertove (oznacava korisniku da ce se alert zatvoriti za nekoliko sekundi)
    var bar = document.getElementById("customBar");
    var barWidth = 100;
    if (bar) {
      var downloadTimer = setInterval(() => {
        barWidth -= 33.33333;
        bar.style.width = barWidth + '%';
        if (barWidth <= 0) {
          clearInterval(downloadTimer);
          console.log("Done");
        }
      }, 750);
    }

  }, false);
})();