import React, { Component } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { render } from "react-dom";

import HomePage from "./HomePage";
import BreakLease from "./BreakLease";

const App = (props) => {



    return (
        <div>
            <h1>helllooooooo {Math.random()}</h1>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HomePage />}></Route>
                    <Route path="/break" element={<BreakLease />}></Route>
                </Routes>
            </BrowserRouter>
        </div>

    )

}

export default App