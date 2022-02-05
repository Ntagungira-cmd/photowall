import posts from '../posts';
export const postReducer = function (state = posts, action) {
  switch (action.type) {
    case "ADD_PHOTO":
      return state.concat(action.payload);
    case "REMOVE_PHOTO":
      return state.filter(state=>state!==action.payload);
    default:
      return state;
  }
};
