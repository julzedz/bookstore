import types from '../types/types';

const initialState = {
  categories: [],
};

export const checkCategoryStatus = (id) => ({
  type: types.STATUS_CHECKED,
  id,
});

export default categoryReducer(state = initialState, action){
  switch(action.type){
    case types.STATUS_CHECKED:
      return 'Under construction';
    default:
      return state;
  }
}
