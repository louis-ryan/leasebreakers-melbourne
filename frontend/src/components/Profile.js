import React, { useEffect } from "react";

const Profile = (props) => {

    const { setCurrentScreen } = props;

    // SET SCREEN FOR NAV BAR
    useEffect(() => {
        setCurrentScreen('profile')
    }, [])

    return (
        <div>
            This is your user profile!!!
        </div>
    );
};

export default Profile;