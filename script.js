
function redirectToProducts(event) {
  event.preventDefault();
  window.location.href = "produtos.html";
}

function resetPassword(event) {
  event.preventDefault();
  var emailInput = document.getElementById("email");
  var email = emailInput.value;
  
  if (!email || !validateEmail(email)) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  // Lógica para enviar o link de redefinição de senha

  alert("O link para redefinição de senha foi enviado para o e-mail informado.");
  window.location.href = "index.html";
}

function validateEmail(email) {
  // Expressão regular para validar o formato do e-mail
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  return emailRegex.test(email);
}

