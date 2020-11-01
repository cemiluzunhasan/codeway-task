import globalState from '../state/global';

export default (state = globalState, action) => {
  switch (action.type) {
    case 'GLOBAL_REQUEST':
      return { ...state, [action.payload.key]: { loading: false, data: action.payload.data } };
    case 'GLOBAL_SUCCESS':
      return { ...state, [action.payload.key]: { loading: false, data: action.payload.data } };
    case 'GLOBAL_ERROR':
      return { ...state, [key]: { loading: false, data: null, error } };
    case 'UPDATE_STATE':
      return { ...state, [action.payload.key]: { loading: false, data: action.payload.data } };
    default:
      return { ...state };
  }
}