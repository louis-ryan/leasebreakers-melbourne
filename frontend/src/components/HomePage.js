import React, { useEffect } from "react";

const HomePage = (props) => {

    const { setCurrentScreen } = props;

    // SET SCREEN FOR NAV BAR
    useEffect(() => {
        setCurrentScreen('home')
    }, [])

    return (
        <div>
            This is the home page !!!
        </div>
    );
};

export default HomePage;