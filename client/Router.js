import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';

export default function() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/about" component={App} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}