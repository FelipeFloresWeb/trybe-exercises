import task from './componentLi';

const tasks = ['Beber água', 'Correr', 'Estudarm', 'Almoço'];

function App() {
  return <ul>Tarefas:
    {tasks.map((item) => task(item))}
    </ul>
  }

export default App;
