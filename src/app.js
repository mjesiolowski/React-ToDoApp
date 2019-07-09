import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addTask, addComment, editComment, deleteComment } from './actions/tasks'

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore()

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addTask())




const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
