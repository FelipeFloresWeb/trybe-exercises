# Componentes Route com passagem de props


+ No que diz respeito ao componente Route , você pode associar um componente com o caminho da URL via children , component ou render ;

+ Faz-se uso da prop component de Route quando não é necessário passar informações adicionais via props para o componente a ser mapeado. Ou seja, se você tem um componente About que não precisa de props setadas para ser chamado, e você precisa mapeá-lo para o caminho de URL /about , você poderia criar uma rota da seguinte forma: <Route path="/about" component={About} /> ;

+ Já a prop render de Route é usada quando é necessário passar informações adicionais via props para o componente a ser mapeado. Ou seja, se você tem um componente Movies que precisa receber uma lista de filmes via props movies , e você precisa mapeá-lo para o caminho de URL /movies , você poderia criar uma rota da seguinte forma: <Route path="/movies" render={(props) => <Movies {...props} movies={['Cars', 'Toy Story', 'The Hobbit']} />} /> ;

+ Tanto component quanto render permitem que você tenha acesso a informações de rota ( match , location e history ) via props do componente que você está mapeando. Ou seja, se você tem a rota <Route path="/about" component={About} /> , About terá match , location e history setadas via props.

## Componentes Route com passagem de parâmetro (rotas dinâmicas)

O interessante em rotas dinâmicas é que podemos utilizar o mesmo componente para renderizar vários caminhos diferentes. Para fazer uso de parâmetro de URL em Route , é preciso fazer uso da sintaxe :nome_do_parametro dentro da propriedade path . Ou seja, <Route path="/movies/:movieId" component={Movie} /> vai definir um parâmetro chamado movieID , e o componente Movie é mapeado a qualquer um dos seguintes caminhos de URL :

+ /movies/1 ;

+ /movies/2 ;

+ /movies/thor.
