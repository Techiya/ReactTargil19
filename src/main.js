import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';


const App = () => {
    const [ score, setScore ] = useState(0);

    function clear() {
        setScore(0);
    }

    return (
        <div className="App">
           <p>Hello</p>
        </div>
    )
}

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
