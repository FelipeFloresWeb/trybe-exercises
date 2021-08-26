const fs = require('fs');
const { expect } = require('chai');

const getNumberType = require('./getNumberType.js');

const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

describe('getNumberType', () => {
  it('Verifica se, ao colocar um número positivo ela retorna (positivo)', () => {
    const result = getNumberType(1);
    expect(result).to.be.equal('positivo');
  });

  it('Verifica se, ao colocar um número negativo ela retorna (negativo)', () => {
    const result = getNumberType(-1);
    expect(result).to.be.equal('negativo');
  });

  it('Verifica se, ao colocar o número "0" ela retorna (neutro)', () => {
    const result = getNumberType(0);
    expect(result).to.be.equal('neutro');
  });

  it('Verifica se, ao colocar uma String ela retorna uma mensagem de erro', () => {
    const result = getNumberType('0');
    expect(result).to.be.equal('o valor deve ser um número');
  });
  // describe('Quando o arquivo existe', () => {
  //   before(() => {
  //     sinon.stub(fs, 'readFileSync').returns(CONTEUDO_DO_ARQUIVO);
  //   });

  //   after(() => {
  //     fs.readFileSync.restore();
  //   });

  //   describe('a resposta', () => {
  //     it('é uma string', () => {
  //       const resposta = getNumberType('arquivo.txt');

  //       expect(resposta).to.be.a('string');
  //     });

  //     it('é igual ao conteúdo do arquivo', () => {
  //       const resposta = getNumberType('arquivo.txt');

  //       expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
  //     });
  //   });
  // });

  // describe('Quando o arquivo não existe', () => {
  //   before(() => {
  //     sinon
  //       .stub(fs, 'readFileSync')
  //       .throws(new Error('Arquivo não encontrado'));
  //   });

  //   after(() => {
  //     fs.readFileSync.restore();
  //   });

  //   describe('a resposta', () => {
  //     it('é igual a "null"', () => {
  //       const resposta = leArquivo('arquivo_que_nao_existe.txt');

  //       expect(resposta).to.be.equal(null);
  //     });
  //   });
  // });
});
