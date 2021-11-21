import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BreakLease from "./BreakLease";

const HomePage = (props) => {


    const handleButtonPressed = () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                votes_to_skip: 700,
                guest_can_pause: true,
            }),
        };
        fetch("/api/create-room", requestOptions)
            .then((response) => response.json())
            .then((data) => console.log(data));
    };


    return (
        <div>
            This is the home page !!!

            <div>
                <button
                    onClick={() => handleButtonPressed()}
                >
                    PRESS ME
                </button>
            </div>
        </div>
    );
};

export default HomePage;