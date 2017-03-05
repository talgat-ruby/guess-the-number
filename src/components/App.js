import React, { Component } from 'react';
import './App.css';

import Timeline from './timeline/Timeline';

class App extends Component {
    state = {
        values: [1, 2, 3, 4, 5]
    }

    render = () => (
        <div className="app">
            <header className="App-header">
                <Timeline values={this.state.values}/>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
    )
}

export default App;
