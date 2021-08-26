const fs = require('fs');

function writefile(nomeDoArquivo, conteudo) {
  fs.writeFileSync(`${__dirname}/${nomeDoArquivo}.txt`, conteudo);
  return 'ok';
}

writefile('testando2', 'Função está funcionando corretamente.');

module.exports = writefile;
