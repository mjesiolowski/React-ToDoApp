import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';


import 'normalize.css/normalize.css';
import './styles/styles.scss';




const store = configureStore()


store.subscribe(() => {
  const tasksJSON = JSON.stringify(store.getState().tasks)
  localStorage.setItem('tasks', tasksJSON)
})

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
