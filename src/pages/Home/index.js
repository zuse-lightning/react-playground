import React, { Component } from "react";
import Buttons from "../../components/Buttons";
import "./style.css";

class Home extends Component {
    render() {

        const { add, remove, reset, containerArray } = this.props;

        return (
            <div>
                <h1 id="test-heading">Test Heading</h1>
                <div id="container">
                    {containerArray.map(element => (
                        <div key={element.id}>{element.status}</div>
                    ))}
                </div>
                <Buttons add={add} remove={remove} reset={reset} />
            </div>
        );
    }
}

export default Home;