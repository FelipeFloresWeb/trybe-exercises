export const ADD_TASK = 'ADD_TASK';

const AddTask = (payload) => ({
  type: ADD_TASK,
  payload,
});

export default AddTask;