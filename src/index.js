import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'
import Home from './Screen/Home';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga'
import {rootReducer} from './reducer/rootReducer';
import Saga from './Saga/saga';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(sagaMiddleware) )
sagaMiddleware.run(Saga)



ReactDOM.render(<Provider store={store}><Home /></Provider>, document.getElementById('root'));

