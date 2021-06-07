import { ADD_TASK } from '../actions/index';

const INIT_STATE = {
  tasks: [],
};

function AddTask(state = INIT_STATE, action) {
  switch (action.type) {
    case ADD_TASK:
      return {...state, tasks: [...state.tasks, action.payload] };
    default:
      return state;
  }
}

export default AddTask;