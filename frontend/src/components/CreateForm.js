import React, { useState, useEffect } from "react";


const CreateForm = (props) => {

    const { setCurrentScreen } = props;

    const [form, setForm] = useState({
        firstName: null,
        lastName: null,
    })

    console.log("form, ", form)

    // SET SCREEN FOR NAV BAR
    useEffect(() => {
        setCurrentScreen('create')
    }, [])

    const handleButtonPressed = () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                first_name: form.firstName,
                last_name: form.lastName,
                votes_to_skip: 700,
                guest_can_pause: true,
            }),
        };
        fetch("/api/create-room", requestOptions)
            .then((response) => response.json())
            .then((data) => console.log(data));
    };


    return (
        <div style={{ display: "flex", justifyContent: "center" }}>

            <div>
                <div className="form__box">
                    Break your lease here
                    <div style={{ height: "16px" }} />
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            first name
                            <input
                                onChange={(e) => {
                                    if (e.target.value) {
                                        setForm({ ...form, firstName: e.target.value })
                                    }
                                }}
                            />
                        </div>
                        <div>
                            last name
                            <input
                                onChange={(e) => {
                                    if (e.target.value) {
                                        setForm({ ...form, lastName: e.target.value })
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <button
                        onClick={() => handleButtonPressed()}
                        style={{ width: "100%", height: "80px", position: "fixed", bottom: "120px", backgroundColor: "unset" }}
                    >
                        create form
                    </button>
                </div>
            </div>


        </div>
    );
};

export default CreateForm;