import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/home';

const name = "Juan Sebastian";
const lastname = "Florez Gomez";
const container = document.getElementById('root');

ReactDOM.render(<Home names={name} last={lastname}/>, container);