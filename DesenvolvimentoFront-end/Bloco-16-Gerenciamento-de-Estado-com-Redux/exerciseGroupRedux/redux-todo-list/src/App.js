import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTask from './actions/index';
import './App.css';

class App extends Component {
constructor(){
  super();
  this.state = {
    task: '',
  }
  this.handleInput = this.handleInput.bind(this);
}

  handleInput = (event) => {
    this.setState({task: event.target.value})
  }

  render() {
    const { tasks, handleTask } = this.props;
    return (
      <div className="App">
        <h2>Todo List</h2>
        <input type='text' value={this.state.task} onChange={this.handleInput} placeholder='Digita aqui sua tarefa.'/>
        <button type='button' onClick={() => handleTask(this.state.task)}>Add Task</button>
        <div>Tarefas
        <ul>
        { tasks.map((task, index) => (
          <li key={index}>{task}</li>
        )) }
        </ul>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  handleTask: (state) => dispatch(AddTask(state))
});

const mapStateToProps = (state) => ({tasks: state.AddTask.tasks});

export default connect(mapStateToProps, mapDispatchToProps)(App);
