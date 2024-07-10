import { v4 } from "uuid";
import { Api } from "../Api/Api";
import Componentes from "../Componentes/Componentes";
import Card from "../Modelos/Card";

class CardService {
  apagarCard = async (id) => {
    const options = { method: "DELETE" }
    await fetch(`http://localhost:3000/produtos/${id}`, options)
    Componentes.cardsContainer.innerHTML = "";
    this.mostrarCards();
  }

  mostrarCards = async () => {
    const produtos = await Api.listarProdutos();

    produtos.forEach(produto => {
      const novoCard = new Card(produto.nome, produto.preco, produto.imagem, produto.id);
      return Componentes.cardsContainer.appendChild(novoCard.render())
    });

    const botoesDeletar = document.querySelectorAll('.botao_delete');
    botoesDeletar.forEach(botao => {
      botao.addEventListener('click', (evento) => {
        const produtoId = evento.currentTarget.getAttribute('data-id');
        this.apagarCard(produtoId);
      });
    });
  }

  criarCard = async ({ nome, preco, imagem, id }) => {

    await fetch("http://localhost:3000/produtos", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        nome,
        preco,
        imagem,
        id: v4()
      })
    })

    Componentes.cardsContainer.innerHTML = "";
    this.mostrarCards();
  }
}

export default new CardService()