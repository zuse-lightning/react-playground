
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import './style.css';

class App extends Component {

    state = {
        containerArray: [],
        // counter: 0
    }

    componentDidMount() {
        const containerData = JSON.parse(window.localStorage.getItem("containerData"));
        this.setState(containerData);
    }

    componentDidUpdate() {
        window.localStorage.setItem("containerData", JSON.stringify(this.state));
    }

    add = () => {
        this.setState(state => {
            const containerArray = [...state.containerArray, { status: "Added" }];
            return {
                containerArray
            };
        });
        this.setState({ counter: this.state.counter + 1 })
        console.log("Added");
        console.log(this.state.containerArray);
        // console.log(this.state.counter);
    }

    remove = (id) => {
        this.setState(state => {
            const containerArray = [state.containerArray.pop()];
            return {
                containerArray
            };
        });
        console.log("Removed");
        console.log(this.state.containerArray);
        // console.log(this.state.counter);
    }

    reset = () => {
        this.setState({ containerArray: [] });
        console.log(this.state.containerArray);
        // console.log(this.state.counter);
    }

    render() {
        return (
            <Routes>
                <Route exact path="/" element={<Home add={this.add} remove={this.remove} reset={this.reset} containerArray={this.state.containerArray} />} />
            </Routes>

        );
    }
}

export default App;