import { v4 } from "uuid";
import { Api } from "../Api/Api";
import Componentes from "../Componentes/Componentes";
import Card from "../Modelos/Card";

class CardService {
  #produtos

  constructor() {
    this.#produtos = [];
  }

  get produtos() {
    return this.#produtos;
  }

  adicionarProduto(produto) {
    this.#produtos.push(produto);
    this.mostrarCards("atualizar-card");
  }

  apagarCard = async (id) => {
    const options = { method: "DELETE" };
    await fetch(`http://localhost:3000/produtos/${id}`, options);
    const novoArray = this.#produtos.filter(produto => produto.id !== id);
    this.#produtos = novoArray;
    this.mostrarCards("atualizar-card");
  }

  mostrarCards = async (atualizar) => {
    if (atualizar === "atualizar-card") {
      Componentes.cardsContainer.innerHTML = "";

      this.#produtos.forEach(produto => {
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
    } else {
      const produtos = await Api.listarProdutos();

      this.#produtos = produtos;

      Componentes.cardsContainer.innerHTML = "";

      this.#produtos.forEach(produto => {
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
  }

  criarCard = async (produto) => {
    const novoProduto = {
      nome: produto.nome,
      preco: produto.preco,
      imagem: produto.imagem,
      id: v4()
    }

    await fetch("http://localhost:3000/produtos", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(novoProduto)
    })

    this.adicionarProduto(novoProduto);
  }
}

export default new CardService()