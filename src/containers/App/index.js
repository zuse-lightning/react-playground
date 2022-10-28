import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import './style.css';

class App extends Component {

    state = {
        containerArray: []
    }

    componentDidMount() {
        const containerData = JSON.parse(window.localStorage.getItem("containerData"));
        this.setState(containerData);
        console.log(containerData);
    }

    componentDidUpdate() {
        window.localStorage.setItem("containerData", JSON.stringify(this.state));
        console.log(this.state);
    }

    add = () => {
        this.setState(state => {
            const containerArray = [...state.containerArray, "Added"];
            return {
                containerArray
            };
        });
        console.log("Added");
        console.log(this.state.containerArray);
    }

    remove = () => {
        this.setState(state => {
            const [first, ...rest] = state.containerArray;
            return {
                containerArray: rest
            };
        });
        console.log("Removed");
        console.log(this.state.containerArray);
    }

    render() {
        return (
            <Routes>
                <Route exact path="/" element={<Home add={this.add} remove={this.remove} containerArray={this.state.containerArray} />} />
            </Routes>

        );
    }
}

export default App;