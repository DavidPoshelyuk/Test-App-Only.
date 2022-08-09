import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/Store";
import App from './App';
import {createGlobalStyle} from "styled-components";
import HelveticaNeueMedium from './fonts/helveticaneue-medium.woff2'

const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', sans-serif;
  }
  @font-face {
    font-family: 'Helvetica Neue';
    src: local('Helvetica Neue'), local('Helvetica Neue'),
    url(${HelveticaNeueMedium}) format('woff2'),
    url(${HelveticaNeueMedium}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }
`


ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App/>
			<Global/>
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);

reportWebVitals();
