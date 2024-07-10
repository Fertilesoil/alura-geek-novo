import CardService from "../Service/CardService";
import Componentes from "../Componentes/Componentes";
import Produto from "../Modelos/Produto";

const produto = new Produto("", "", "");

const campos = Object.entries(Componentes).splice(0, 3);

Componentes.botaoEnviar.onclick = async (evento) => {
  evento.preventDefault();
  await CardService.criarCard(produto);
  campos.forEach(campo => (campo ? campo[1].value = "" : campo))
}

campos.forEach(campo => {
  return campo[1].addEventListener("input", (evento) => produto.popularProduto(evento))
});