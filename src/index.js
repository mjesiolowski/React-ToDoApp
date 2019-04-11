import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { store } from './redux/store'
import { Provider } from 'react-redux'

import './styles/index.css';
import './styles/App.css';
import './styles/Header.css';
import './styles/DoneTasks.css';
import './styles/SearchedTasks.css';
import './styles/TaskToDo.css';



ReactDOM.render(
   <Provider store={store}>
      < App />
   </Provider>,
   document.getElementById('root'));