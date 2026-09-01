const Produto = {
    nome: "Teclado Mecânico",
    preco: 150.00,
    estoque: 25,
    EmOferta: true
};

console.log(`Produto: ${Produto.nome}`);
console.log(`Preço: ${Produto.preco.toFixed(2)}`);
console.log(`Produto: ${Produto.nome} | R$ ${Produto.preco} | ${Produto.estoque} | ${Produto.EmOferta}`);