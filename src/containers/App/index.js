
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import './style.css';

class App extends Component {

    state = {
        containerArray: [],
    }

    componentDidMount() {
        const containerData = JSON.parse(window.localStorage.getItem("containerData"));
        this.setState(containerData);
    }

    componentDidUpdate() {
        window.localStorage.setItem("containerData", JSON.stringify(this.state));
        console.log(this.state.containerArray)
    }

    add = () => {
        this.setState(state => {
            const containerArray = [...state.containerArray, { status: "Added" }];
            return {
                containerArray
            };
        });
        console.log("Added");
    }

    remove = (e) => {
        const currentArray = [...this.state.containerArray];
        const index = currentArray[-1]
        if (index !== -1) {
            currentArray.splice(index, 1);
            this.setState({ containerArray: currentArray });
        }
        console.log("Removed");
    }

    reset = () => {
        this.setState({ containerArray: [] });
    }

    render() {
        return (
            <Routes>
                <Route exact path="/" element={<Home 
                    add={this.add} 
                    remove={this.remove} 
                    reset={this.reset} 
                    containerArray={this.state.containerArray} 
                />} />
            </Routes>

        );
    }
}

export default App;