import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'
import Home from './Screen/Home';
import { createStore } from 'redux';
import {Provider} from "react-redux";
import {rootReducer} from './reducer/rootReducer';

const store = createStore(rootReducer)



ReactDOM.render(<Provider store={store}><Home /></Provider>, document.getElementById('root'));

