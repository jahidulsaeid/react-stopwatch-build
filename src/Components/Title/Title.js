import React, { Component } from 'react';

class Title extends Component {

    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }
    }

    counter() {
        this.setState({
            number: this.state.number + 1
        })
        console.log(this.state.number);

    }

    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <button className="btn btn-primary" onClick={() => this.counter()}>Click me</button>
            </div>
        )

    }
}

export default Title;