import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux" // this is a component from the react-redux dependency
                                     // Redux uses context under the hood which is why we wrap the Provider Component around the App component

import store from "./redux" // it is implied that we are getting the store from the index.js

ReactDOM.render(
        <Provider store={store}> {/* the Provider component passes a store prop and we get the store instance from the redux/index.js file that we exported*/}
            <App /> {/** we can use the store instance within the app */}
        </Provider>,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


// the react-redux is separate dependency from the redux as the react-redux enables us to use and integrate the redux functionalities in an easier matter into the React Application