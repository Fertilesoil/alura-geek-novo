import CardService from "../Service/CardService";
import Componentes from "../Componentes/Componentes";
import Produto from "../Modelos/Produto";

const produto = new Produto("", "", "");

const campos = Object.values(Componentes).splice(0, 3);

Componentes.botaoEnviar.onclick = async (evento) => {
  evento.preventDefault();
  await CardService.criarCard(produto);
  campos.forEach(campo => campo.value = "")
}

campos.forEach(campo => {
  return campo.addEventListener("input", (evento) => produto.popularProduto(evento))
});