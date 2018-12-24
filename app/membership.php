<?php
session_start();
// ob_start();
require_once "./includes/connection.php";
?>

<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="./styles/bootstrap_solar.css">

  <!-- FontAwesome CSS -->
  <link rel="stylesheet" href="./styles/fontawesome_all.css">

  <!-- Custom CSS -->
  <link rel="stylesheet" href="./styles/membership.css">

  <title>Prijava / Registracija</title>
</head>

<body>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-8 col-lg-6">

        <!-- Ispisivanje poruke preko sesije -->
        <?php
        if (isset($_SESSION['msg']) && $_SESSION['msg'] != '') {
          echo $_SESSION['msg'];
          unset($_SESSION['msg']);
        }
        ?>

        <ul class="nav nav-tabs nav-justified" id="myTabLoginReg" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="login-tab" data-toggle="tab" href="#login" role="tab" aria-controls="login"
              aria-selected="true">Prijava</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register"
              aria-selected="false">Registracija</a>
          </li>
        </ul>
        <div class="card card-tabs-custom">
          <div class="card-body">
            <div class="tab-content" id="myTabContentLoginReg">
              <!-- Login panel -->
              <div class="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                <img class="card-img-top" src="../../templates/evipod/images/acer-agriculture-environment-512.jpg" alt="Photo by Kaboompics.com from Pexels">
                <div class="card-body">

                  <h4 class="card-title text-center">PRIJAVA</h4>
                  <hr>
                  <form method="POST" action="login.php">
                    <div class="form-group">
                      <label for="loginEmail">Email</label>
                      <input type="email" class="form-control" id="loginEmail" placeholder="Unesite email...">
                    </div>
                    <div class="form-group">
                      <label for="loginPass">Lozinka</label>
                      <input type="password" class="form-control" id="loginPass" placeholder="Unesite lozinku...">
                    </div>
                    <div class="form-group">
                      <label for="loginPassConfirm">Ponovite lozinku</label>
                      <input type="password" class="form-control" id="loginPassConfirm" placeholder="Ponovite lozinku...">
                    </div>
                    <button type="submit" name="loginSubmit" class="btn btn-primary"><i class="fas fa-sign-in-alt"></i>&nbsp;Prijava</button>
                    <a class="btn btn-secondary" href="../" role="button"><i class="fas fa-arrow-alt-circle-left"></i>&nbsp;Natrag</a>
                  </form>

                  <hr>
                </div>
              </div>
              <!-- /.Login panel -->

              <!-- Registration panel -->
              <div class="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                <img class="card-img-top" src="../../templates/evipod/images/afterglow-agriculture-back-light-512.jpg"
                  alt="Photo by Felix Mittermeier from Pexels">
                <div class="card-body">

                  <h4 class="card-title text-center">REGISTRACIJA</h4>
                  <hr>
                  <form method="POST" action="registration.php">
                    <div class="form-group">
                      <label for="registrationName">Ime</label>
                      <input type="text" class="form-control" id="registrationName" name="registrationName" placeholder="Unesite ime...">
                    </div>
                    <div class="form-group">
                      <label for="registrationEmail">Email</label>
                      <input type="email" class="form-control" id="registrationEmail" name="registrationEmail" placeholder="Unesite email...">
                    </div>
                    <div class="form-group">
                      <label for="registrationPass">Lozinka</label>
                      <input type="password" class="form-control" id="registrationPass" name="registrationPass" placeholder="Unesite lozinku...">
                    </div>
                    <div class="form-group">
                      <label for="registrationPassConfirm">Ponovite lozinku</label>
                      <input type="password" class="form-control" id="registrationPassConfirm" name="registrationPassConfirm" placeholder="Ponovite lozinku...">
                    </div>
                    <button type="submit" name="registrationSubmit" class="btn btn-primary"><i class="fas fa-user-plus"></i>&nbsp;Registracija</button>
                    <a class="btn btn-secondary" href="../" role="button"><i class="fas fa-arrow-alt-circle-left"></i>&nbsp;Natrag</a>
                  </form>

                  <hr>
                </div>
              </div>
              <!-- /.Registration panel -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="./scripts/jquery-3.3.1.min.js"></script>
  <script src="./scripts/bootstrap.bundle.js"></script>
  <script src="./scripts/custom.js"></script>
</body>

</html>