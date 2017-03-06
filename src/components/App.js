import React, { Component } from 'react';
import $class from 'classnames';
import './App.css';

import Timeline from './timeline/Timeline';

const TYPES = {
    HIGH: 'HIGH',
    LOW: 'LOW'
}

class App extends Component {
    initState = {
        values: [],
        guessNumber: '',
        value: '',
        correct: false,
        right: true
    }

    state = this.initState;

    componentWillMount = () => {
        const guessNumber = Math.floor(Math.random() * (999 - 1)) + 1;
        this.setState({ guessNumber });
    }

    onChange = ({ target: { value } }) => {
        this.setState({ value: Number(value) });
    }

    submit = () => {
        const { guessNumber, value, values: prevValues, right: prevRight } = this.state;
        if(value === guessNumber) {
            this.setState({ correct: true });
        } else {
            let values = [...prevValues, {
                value,
                type: value > guessNumber ? TYPES.HIGH : TYPES.LOW
            }];
            let right = prevRight;

            if(values.length > 5) {
                values = [...values.slice(1)];
                right = !prevRight;
            }

            this.setState({ values, right });
        }
    }

    reset = () => {
        this.setState(this.initState);
    }

    render = () => (
        <div className="app">
            <header className="App-header">
                <Timeline values={this.state.values} startRight={this.state.right}/>
            </header>
            <main>
                <input type="text" value={this.state.value} onChange={this.onChange}/>
                <button onClick={this.submit}>Submit</button>
            </main>
            <section className={$class('modal-window', { open: this.state.correct })}>
                <div>
                    <h2>Correct!!!</h2>
                    <p>Congrats, you found the number {this.state.value}</p>
                    <button onClick={this.reset}>RESET</button>
                </div>
            </section>
        </div>
    )
}

export default App;
