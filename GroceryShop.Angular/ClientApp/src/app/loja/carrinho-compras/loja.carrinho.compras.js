"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LojaCarrinhoCompras = /** @class */ (function () {
    function LojaCarrinhoCompras() {
        this.produtos = [];
    }
    LojaCarrinhoCompras.prototype.adicionar = function (produto) {
        var produtosLocalStorage = localStorage.getItem("produtosLocalStorage");
        if (!produtosLocalStorage) {
            // se não existir nada dentro do localStorage
            this.produtos.push(produto);
        }
        else {
            // se ja existir pelo menos um item armazenado na sessao(produtosLocalStorage)
            this.produtos = JSON.parse(produtosLocalStorage);
            this.produtos.push(produto);
        }
        localStorage.setItem("produtosLocalStorage", JSON.stringify(this.produtos));
    };
    LojaCarrinhoCompras.prototype.obterProdutos = function () {
        var produtosLocalStorage = localStorage.getItem("produtosLocalStorage");
        if (produtosLocalStorage)
            return JSON.parse(produtosLocalStorage);
    };
    LojaCarrinhoCompras.prototype.removerProduto = function (produto) {
    };
    return LojaCarrinhoCompras;
}());
exports.LojaCarrinhoCompras = LojaCarrinhoCompras;
//# sourceMappingURL=loja.carrinho.compras.js.map