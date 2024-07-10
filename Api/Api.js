
export const listarProdutos = async () => {
  const produtos = await fetch("http://localhost:3000/produtos");
  const produtosConvertidos = await produtos.json();
  return produtosConvertidos;
}


export const Api = {
  listarProdutos
}