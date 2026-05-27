const modal = document.getElementById("modal");

document.getElementById("abrir").onclick = () => {
  modal.classList.remove("oculto");
};

document.getElementById("cerrar").onclick = () => {
  modal.classList.add("oculto");
};