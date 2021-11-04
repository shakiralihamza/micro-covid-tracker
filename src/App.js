import './App.css';
import MainMenu from "./components/MainMenu";
import MyContext from "./Context/MyContext";
import {useState} from "react";

function App() {
    const [currentMenu, setCurrentMenu] = useState('statistics');

    const contextData = {
        currentMenu,
        setCurrentMenu
    }

    return (
        <MyContext.Provider value={contextData}>
            <MainMenu/>
        </MyContext.Provider>
    );
}

export default App;
