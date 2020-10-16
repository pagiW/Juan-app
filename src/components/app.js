import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Hola from './hello.js';
import Home from './home.js';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/hello' component={Hola} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;