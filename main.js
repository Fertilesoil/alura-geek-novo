import CardService from "./Service/CardService";
import "./Eventos/Escutadores"

window.addEventListener("DOMContentLoaded", () => {
  return CardService.mostrarCards();
});
