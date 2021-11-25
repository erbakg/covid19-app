import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import appReducer from './app/app-reducer';
import dataReducer from './data/data-reducer';

const rootReducer = combineReducers({
  app: appReducer,
  data: dataReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
