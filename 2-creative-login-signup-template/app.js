var signupCard = document.getElementById('signup-card');
var loginCard = document.getElementById('login-card');
var buttons = document.getElementsByTagName('button');
var btnSignup = buttons[0];
var btnForgetPass = buttons[1];
var btnLogin = buttons[2];

var isLoginActive = true;

var toggleActiveClass = function() {
}

signupCard.onclick = function() {
  if (isLoginActive) {
    isLoginActive = false;
    loginCard.classList.remove('active');
    loginCard.classList.add('inactive');
    signupCard.classList.remove('inactive');
    signupCard.classList.add('active');

    btnLogin.disabled = true;
    btnForgetPass.disabled = true;
    btnSignup.disabled = false;
  }
}

loginCard.onclick = function() {
  if (!isLoginActive) {
    isLoginActive = true;
    signupCard.classList.remove('active');
    signupCard.classList.add('inactive');
    loginCard.classList.remove('inactive');
    loginCard.classList.add('active');

    btnLogin.disabled = false;
    btnForgetPass.disabled = false;
    btnSignup.disabled = true;
  }
}
