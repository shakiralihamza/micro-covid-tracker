import './App.css';
import MainMenu from "./components/MainMenu";
import MyContext from "./Context/MyContext";
import {useState} from "react";
import Statistics from "./components/Statistics";
import {Divider} from "@mui/material";

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
            <Statistics/>
        </MyContext.Provider>
    );
}

export default App;
