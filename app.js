"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const switcher = document.querySelector(".btn-modo");
  const body = document.body;

  switcher.addEventListener("click", function () {
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
      this.textContent = "🌞";
      body.style.background = "#2E2E2E";
    } else {
      this.textContent = "🌚";
      body.style.background = "#c5c5c5";
    }
  });

  console.log("current class name: " + body.className);
});
function calcular(tipo, valor) {
  console.log(tipo, valor);

  if (tipo === "acao") {
    if (valor === "c") {
      document.getElementById("resultado").value = "";
    }

    if (
      valor === "+" ||
      valor === "-" ||
      valor === "*" ||
      valor === "/" ||
      valor === "."
    ) {
      document.getElementById("resultado").value += valor;
    }
    if (valor === "=") {
      var valor_campo = eval(document.getElementById("resultado").value);
      document.getElementById("resultado").value = valor_campo;
    }
  } else if (tipo === "valor") {
    document.getElementById("resultado").value += valor;
  }
}
