import React from "react";
import MainMenu from "./components/MainMenu";
import MyContext from "./Context/MyContext";
import {useState} from "react";
import Statistics from "./components/Statistics";
import {Divider} from "@mui/material";
import Symptoms from "./components/Symptoms";
import Prevention from "./components/Prevention";

function App() {
    const [currentMenu, setCurrentMenu] = useState('statistics');
    const [country, setCountry] = useState('worldwide');
    const [time, setTime] = useState('alltime');

    const contextData = {
        currentMenu,
        setCurrentMenu,

        country,
        setCountry,

        time,
        setTime,
    }

    return (
        <MyContext.Provider value={contextData}>
            <MainMenu/>
            <Divider />
            {currentMenu==='statistics'&&<Statistics/>}
            {currentMenu==='symptoms'&&<Symptoms/>}
            {currentMenu==='prevention'&&<Prevention/>}
        </MyContext.Provider>
    );
}

export default App;
