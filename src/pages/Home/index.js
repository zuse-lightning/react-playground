import React, { Component } from "react";
import Buttons from "../../components/Buttons";
import "./style.css";

class Home extends Component {
    render() {

        const { add, remove } = this.props;

        return (
            <div>
                <h1 id="test-heading">Test Heading</h1>
                <div id="container"></div>
                <Buttons add={add} remove={remove} />
            </div>
        );
    }
}

export default Home;