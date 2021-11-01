import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import allReducer from './reducers'
import { Provider } from 'react-redux'

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() s an extension that allows us to see state changes in the browser
const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> 
, document.getElementById('root'));

serviceWorker.unregister();

////this is usiing only redux
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { createStore } from 'redux';

// //STORE -> GlLOBALIZED STATE

// //ACTION INCREMENT
// //an action is a simple function that returns an object
// const increment = () => {
//     return{
//         type: 'INCREMENT'
//     }
// }

// const decrement = () => {
//     return{
//         type: 'DECREMENT'
//     }
// }

// //REDUCER
// //takes care of all the action related to our counter
// // this will take 2 argument
// const counter = (state=0, action) => {
//     switch(action.type){
//         case "INCREMENT":
//             return state + 1;
//         case "DECREMENT":
//             return state - 1;
//         default :
//             return console.log('default')
//     }
// }

// let store = createStore(counter)
// //Display it inn the console
// store.subscribe(()=> console.log(store.getState()));

// //DISPATCH
// //will execute an action
// store.dispatch(increment())
// store.dispatch(decrement())
// store.dispatch(decrement())


// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
