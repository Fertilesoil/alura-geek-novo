import { v4 } from "uuid";
import CardService from "../Service/CardService";

class CardController {
  criarNovoCard = async (produto) => {
    const novoProduto = {
      nome: produto.nome,
      preco: produto.preco,
      imagem: produto.imagem,
      id: v4()
    }
    try {
      await CardService.criarCard(novoProduto);
      CardService.adicionarProduto(novoProduto);
      produto.limparProduto();
    } catch (error) {
      console.log(error);
    }
  }

  deletarCard = async (id) => {
    try {
      await CardService.apagar(id);
      const novoArray = CardService.produtos.filter(produto => produto.id !== id);
      CardService.produtos = novoArray;
      this.mostrarCards("atualizar-card");
    } catch (error) {
      console.log(error)
    }
  }

  mostrarCards = async (atualizar) => {
    try {
      if (atualizar !== "atualizar-card") {
        const produtos = await CardService.listarProdutos();
        CardService.produtos = produtos;
        CardService.gerarCard();
      } else {
        CardService.gerarCard();
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default new CardController;