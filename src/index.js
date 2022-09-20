import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

function ResultItem() {
    return (
        <div>
            <p>Bubby's</p>
            <p>Price: $$$</p>
            <p>Location: Tribeca</p>
        </div>
    );
}

export default ResultItem;

import ResultItem from './ResultItem';

function App() {
    return (
        <div>
            <ResultItem />
            <ResultItem />
        </div>
    );
}


//dynamic
import ResultItem from './ResultItem';

function App() {
    return (
        <div>
            <ResultItem name="Bubby's" price="$$$" location="Tribeca"/>
            <ResultItem name="Nathan's Famous" price="$" location="Coney Island"/>
        </div>
    );
}

import { messages, contacts } from "./data";