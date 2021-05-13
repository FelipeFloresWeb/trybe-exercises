# :atom_symbol:Você será capaz de:

### Utilizar o _componentDidMount_ para executar uma ação após o componente ser inserido no DOM;

### Utilizar o _shouldComponentUpdate_ para avaliar se uma atualização do componente deve ou não acontecer naquele momento;

### Utilizar o _componentDidUpdate_ para executar uma ação após o componente ser atualizado;

### Utilizar o _componentWillUnmount_ para realizar uma ação antes de o componente ser desmontado.


## O ciclo de vida e os principais métodos funcionam da seguinte maneira:

### Inicialização:
constructor - recebe as props e define o estado;

### Montagem:
render - renderiza o componente, inserindo-o no DOM;

### componentDidMount - dispara uma ou mais ações após o componente ser inserido no DOM (ideal para requisições) ;

### Atualização:
shouldComponentUpdate - possibilita autorizar ou não o componente a atualizar;
componentDidUpdate - dispara uma ou mais ações após o componente ser atualizado;

### Desmontagem:
componentWillUnmount - dispara uma ou mais ações antes de o componente ser desmontado.

Além dos métodos citados, há também outros que o próprio React intitula de Métodos Raramente Usados , como o getDerivedStateFromProps e getSnapshotBeforeUpdate , e que não serão o foco desta aula. Caso tenha interesse, você pode aprender sobre eles neste [Link](https://pt-br.reactjs.org/docs/react-component.html#static-getderivedstatefromprops) .

