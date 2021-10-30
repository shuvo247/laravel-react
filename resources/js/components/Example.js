import React from 'react';
import ReactDOM from 'react-dom';

class Example extends React.Component {
    state = {
        counter : 0
    }
    Increment = () => {
        let newIncrement = this.state.counter + 1;
        this.setState({
            counter : newIncrement,
        });
    }
    Decrement = () => {
        let newDecrement = this.state.counter - 1;
        this.setState({
            counter : newDecrement,
        });
    }
    render() {
        return (
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Simple Increment and Decrement Projecct</div>

                        <div className="card-body">
                            Number : {this.state.counter} 
                            
                        </div>
                        <button className="btn btn-info" onClick={this.Increment}>Increment</button>
                            <button className="btn btn-danger" onClick={this.Decrement}>Decrement</button>
                    </div>
                </div>
            </div>
        </div>
        )
    };
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
