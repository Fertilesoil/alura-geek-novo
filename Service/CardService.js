import Componentes from "../Componentes/Componentes";
import Card from "../Modelos/Card";
import CardController from "../Controller/CardController";

class CardService {
  #produtos

  constructor() {
    this.#produtos = [];
  }

  get produtos() {
    return this.#produtos;
  }

  set produtos(produtos) {
    this.#produtos = produtos;
  }

  listarProdutos = async () => {
    const produtos = await fetch("http://localhost:3000/produtos");
    const produtosConvertidos = await produtos.json();
    return produtosConvertidos;
  }

  adicionarProduto(produto) {
    this.#produtos.push(produto);
    CardController.mostrarCards("atualizar-card");
  }

  apagar = async (id) => {
    const options = { method: "DELETE" };
    return await fetch(`http://localhost:3000/produtos/${id}`, options);
  }

  gerarCard = () => {
    Componentes.cardsContainer.innerHTML = "";

    this.#produtos.forEach(produto => {
      const novoCard = new Card(produto.nome, produto.preco, produto.imagem, produto.id);
      return Componentes.cardsContainer.appendChild(novoCard.render())
    });

    const botoesDeletar = document.querySelectorAll('.botao_delete');
    botoesDeletar.forEach(botao => {
      botao.addEventListener('click', (evento) => {
        const produtoId = evento.currentTarget.getAttribute('data-id');
        CardController.deletarCard(produtoId);
      });
    });
  }

  criarCard = async (produto) => {
    return await fetch("http://localhost:3000/produtos", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(produto)
    })
  }
}

export default new CardService()