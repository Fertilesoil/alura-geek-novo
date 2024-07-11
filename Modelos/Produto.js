

class Produto {
  #id
  #nome
  #preco
  #imagem

  constructor(nome, preco, imagem) {
    this.#nome = nome;
    this.#preco = preco;
    this.#imagem = imagem;
  }

  /**
   * @param {string} id
   */
  set id(id) {
    this.#id = id;
  }

  set nome(name) { 
    this.#nome = name;
  }

  set preco(preco) {
    this.#preco = preco;
  }

  set imagem(imagem) {
    this.#imagem = imagem;
  }

  get nome() {
    return this.#nome;
  }

  get preco() {
    return this.#preco;
  }

  get imagem() {
    return this.#imagem;
  }

  popularProduto = (evento) => {
    const { name, value } = evento.target;
    this[name] = value;
  }

  limparProduto = () => {
    this.#id = "";
    this.#nome = "";
    this.#preco = "";
    this.#imagem = "";
  }
}

export default Produto;