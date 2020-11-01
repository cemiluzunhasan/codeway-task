import authState from '../state/auth';

export default (state = authState, action) => {
  return { ...state };
} 