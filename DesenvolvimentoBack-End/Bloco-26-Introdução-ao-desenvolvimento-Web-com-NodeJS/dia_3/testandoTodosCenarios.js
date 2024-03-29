/* Testando todos os cenários
Adicionando os demais comportamentos, temos:
tests/calculaSituacao.js */

const { expect } = require('chai');

const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovado');
  });
});

describe('Quando a média for maior que 7', () => {
  it('retorna "aprovado"', () => {
    const resposta = calculaSituacao(9);

    expect(resposta).to.be.equals('aprovado');
  });
});

describe('Quando a média for igual a 7', () => {
  it('retorna "aprovado"', () => {
    const resposta = calculaSituacao(7);

    expect(resposta).to.be.equals('aprovado');
  });
});
/* Pronto, vamos executá-lo e ver o resultado.
Lembre-se que deixamos um cenário quebrado de proposito para corrigirmos.

Nosso teste agora está validando com sucesso os cenários esperados. Podemos então, aplicar a correção que falta em nosso código e então simplesmente rodar npm test para garantir tanto que o bug foi corrigido, quanto que os outros cenários continuaram funcionando após a correção. */