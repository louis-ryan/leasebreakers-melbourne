import React, { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import Profile from "./Profile";
import CreateForm from "./CreateForm";


const App = (props) => {

    const [currentScreen, setCurrentScreen] = useState(null)


    return (
        <div className="wrapper" style={{ height: "100vh", display: "flex" }}>
            <div style={{ width: "100%" }}>

                <BrowserRouter>

                    <Routes>
                        <Route exact path="/" element={<HomePage
                            setCurrentScreen={setCurrentScreen}
                        />} />
                        <Route path="/create" element={<CreateForm
                            setCurrentScreen={setCurrentScreen}
                        />} />
                        <Route path="/profile" element={<Profile
                            setCurrentScreen={setCurrentScreen}
                        />} />
                    </Routes>

                    <div className="bottom__bar">
                        <Link to='/' className={`nav__link ${currentScreen === 'home' ? "nav__link__active" : ""
                            }`}>
                            listings
                        </Link>
                        <Link to='/create' className={`nav__link ${currentScreen === 'create' ? "nav__link__active" : ""
                            }`}>
                            add new property
                        </Link>
                        <Link to='profile' className={`nav__link ${currentScreen === 'profile' ? "nav__link__active" : ""
                            }`}>
                            my profile
                        </Link>
                    </div>
                </BrowserRouter>
            </div>
        </div>

    )

}

export default App