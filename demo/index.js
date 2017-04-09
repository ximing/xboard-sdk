import 'babel-polyfill';
import React, {Component} from "react";
import rab, {connect, createAction} from 'rabjs/index.js';
import {Router, Route} from 'rabjs/router';
import Demo from './demo';

class WrapEditContainer extends Component {
    render() {
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}

//1. init app
const app = rab({
    debug:true
});

app.router(({history}) => {
    return (
        <Router history={history}>
            <Route path="/xboard" component={WrapEditContainer}>
                <Route path="demo" component={Demo}/>
            </Route>
        </Router>
    );
});

// 5. Start
app.start('#app');
