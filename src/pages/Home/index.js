import React, { Component } from "react";
import "./style.css";

class Home extends Component {
    render() {
        return (
            <div>
                <h1 id="test-heading">Test Heading</h1>
                <div id="container"></div>
                <div id="buttons-container">
                    <button onClick={this.add} id="add">Add</button>
                    <button onClick={this.remove} id="remove">Remove</button>
                </div>
            </div>
        );
    }
}

export default Home;