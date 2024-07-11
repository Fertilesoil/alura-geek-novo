import Componentes from "../Componentes/Componentes";
import Produto from "../Modelos/Produto";
import CardController from "../Controller/CardController";

export const produto = new Produto("", "", "");

const campos = Object.values(Componentes).splice(0, 3);

Componentes.botaoEnviar.onclick = async (evento) => {
  evento.preventDefault();
  await CardController.criarNovoCard(produto);
  campos.forEach(campo => campo.value = "")
}

campos.forEach(campo => {
  return campo.addEventListener("input", (evento) => produto.popularProduto(evento))
});