// Javascript
// Auto-start anonimna funkcija
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        // Provjera da li postoje greske sa form input-ima
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');

        // Promjena submit gumba ukoliko je forma tocna prilikom klika
        if (form.checkValidity()) {
          setTimeout(function () {
            document.getElementById("registrationSubmit").innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>&nbsp;Registracija';
            document.getElementById("registrationSubmit").setAttribute("disabled", "");
          }, 250);
        }

      }, false);
    });
  }, false);





})();

document.addEventListener("DOMContentLoaded", function (event) {

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

  // Funkcija za provjeru lozinki kod registracije
  function checkRegistrationPass() {
    var registrationPass = document.getElementById('registrationPass');
    var registrationPassConfirm = document.getElementById('registrationPassConfirm');
    if (registrationPass && registrationPassConfirm) {
      if (registrationPass.value != registrationPassConfirm.value) {
        registrationPassConfirm.setCustomValidity('Lozinke moraju biti jednake.');
      } else {
        registrationPassConfirm.setCustomValidity('');
      }
    }
  }

  // Funkcija za provjeru lozinki kod resetiranja istih
  function checkResetPass() {
    var resetPass = document.getElementById('pwdResetConfirm');
    var resetPassConfirm = document.getElementById('pwdResetConfirmRepeat');
    if (resetPass && resetPassConfirm) {
      if (resetPass.value != resetPassConfirm.value) {
        resetPassConfirm.setCustomValidity('Lozinke moraju biti jednake.');
      } else {
        resetPassConfirm.setCustomValidity('');
      }
    }
  }

  // Skrivanje svih alert-ova nakon X sekundi
  $(".alertFadeout").delay(3000).fadeOut();

  // Provjera podudaranja lozinki prilikom tipkanja
  $("#registrationPass, #registrationPassConfirm").keyup(checkRegistrationPass);
  $("#pwdResetConfirm, #pwdResetConfirmRepeat").keyup(checkResetPass);

  // Ukoliko je validacija forme tocna
  // $("#registrationSubmit").click(function () {
  //   var isValid = document.querySelector('#registrationForm');
  //   if (isValid.checkValidity()) {
  //     setTimeout(function () {
  //       $("#registrationSubmit").html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...');
  //       $("#registrationSubmit").attr('disabled', true);
  //     }, 200);
  //   }
  // });
});