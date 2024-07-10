
class Card {
  #nome
  #valor
  #imagem
  #id

  constructor(nome, valor, imagem, id) {
    this.#nome = nome;
    this.#valor = valor;
    this.#imagem = imagem;
    this.#id = id;
  }

  render() {
    const div = document.createElement("div");
    div.classList.add("card_container");
    div.innerHTML = `<div class="card">
                              <div class= "card_image">
                                  <img class="imagem_produto" src="${this.#imagem}" alt="imagem de produto">
                              </div>
                              <div class="produto_descricao">
                                  <p class="produto_descricao_texto">${this.#nome}</p>
                                  <div class="produto_descricao_inferior"> 
                                      <p class="produto_preco">R$ ${Number(this.#valor).toFixed(2)}</p>
                                      <button class="botao_delete" data-id="${this.#id}">
                                        <img class="produto_preco" src="./images/botao_delete.png" alt="icone de apagar" >
                                      </button>
                                  </div>
                              </div>
                          </div>`;
    return div;
  }
}

export default Card;