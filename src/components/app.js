import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Hola from './hello.js';
import Home from './home.js';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/home/hello' component={Hola} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;