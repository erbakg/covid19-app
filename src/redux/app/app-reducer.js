import { HIDE_LOADER, SHOW_LOADER } from './app-types';

const initialState = {
  loader: false,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loader: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        loader: false,
      };
    default:
      return state;
  }
}
