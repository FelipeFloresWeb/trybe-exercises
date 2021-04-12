/* Fetch API
No contexto do Front-end, a maioria dos casos em que precisamos utilizar funções assíncronas são
em requisições. Um bom exemplo é a função fetch() da Fetch API

A Fetch API contém uma série de recursos desenvolvidos para lidar com requisições http no
JavaScript.A função primária é a fetch() , utilizada para fazer chamadas às URL's das APIs .
Trata-se de uma função assíncrona, baseada em uma promise.
Uma API, por sua vez, é uma forma de trafegar dados entre aplicações. Por exemplo: existe uma API que todos os dias possui uma piada diferente. A URL da API é https://api.jokes.one . Portanto, se quisermos ter acesso a essa piada, precisamos fazer uma requisição para a URL da API, solicitando os dados. A API, por sua vez, vai analisar a requisição e responder os dados pedidos. Note que há um tempo entre a requisição ser enviada e a resposta ser devolvida. Por isso, precisamos que a requisição seja assíncrona.
A função fetch recebe dois parâmetros:
URL do serviço alvo da requisição;
Um objeto contendo algumas informações sobre requisição de API. Esse objeto contém chaves com
informações específicas para aquela chamada. Essas especificações estão sempre presentes na
documentação de uso daquela API específica. Não se preocupe muito em como obter essas informações
por agora ; nesse início, daremos essas informações para que vocês se acostumem a usar o .fetch() .
O retorno da chamada varia conforme a API utilizada, não só em conteúdo, mas também formato. Como
nosso maior foco é JavaScript, lidaremos principalmente com respostas em formato JSON, ou respostas
que possam ser reformatadas para tal.
Até o momento, não é necessário que você saiba utilizar a função fetch . No próximo conteúdo você
irá aprofundar no assunto! */
