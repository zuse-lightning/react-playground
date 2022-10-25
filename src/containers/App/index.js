import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import './style.css';

class App extends Component {

    state = {
        containerArray: []
    }

    componentDidMount() {
        const data = JSON.parse(window.localStorage.getItem("data"));
        this.setState(data);
        console.log(data);
    }

    componentDidUpdate() {
        window.localStorage.setItem("data", JSON.stringify(this.state));
        console.log(this.state);
    }

    add = () => {
        const container = document.getElementById("container");
        let newElement = document.createElement("div");
        newElement.setAttribute("id", "new-element");
        newElement.innerHTML = "Added";
        container.appendChild(newElement);
        this.state.containerArray.push("Added");
        console.log("Added");
        console.log(this.state.containerArray);
    }

    remove = () => {
        let deletedElement = document.getElementById("new-element");
        deletedElement.remove();
        this.state.containerArray.pop();
        console.log("Removed");
        console.log(this.state.containerArray);
    }

    render() {
        return (
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>

        );
    }
}

export default App;