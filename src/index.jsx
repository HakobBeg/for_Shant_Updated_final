import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Provider from "react-redux/lib/components/Provider";
import { store } from "./Redux/Store";

let rerenderPage = () => {

    ReactDOM.render(
            <App/>
        ,
        document.getElementById('root'));

};

rerenderPage();


store.subscribe(()=>{
    rerenderPage(store.getState());
    console.log(store.getState());
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
