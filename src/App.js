import './App.css';
import MainMenu from "./components/MainMenu";
import MyContext from "./Context/MyContext";
import {useState} from "react";
import Statistics from "./components/Statistics";
import {Divider} from "@mui/material";
import Symptoms from "./components/Symptoms";
import Prevention from "./components/Prevention";

function App() {
    const [currentMenu, setCurrentMenu] = useState('statistics');

    const contextData = {
        currentMenu,
        setCurrentMenu
    }

    return (
        <MyContext.Provider value={contextData}>
            <MainMenu/>
            <Divider />
            {currentMenu==='statistics'?<Statistics/>:null}
            {currentMenu==='symptoms'?<Symptoms/>:null}
            {currentMenu==='prevention'?<Prevention/>:null}
        </MyContext.Provider>
    );
}

export default App;
