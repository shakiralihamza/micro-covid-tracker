import React, {useContext} from 'react';
import {Button, styled} from "@mui/material";
import MyContext from "../Context/MyContext";

const MenuButtonS = styled(Button)(({theme}) => ({
    borderRadius: '20px',
    textTransform: "none",
    border: '1.5px solid',
    borderColor: theme.palette.primary.dark,
    backgroundColor: theme.palette.primary.dark,
    fontWeight: 400,
    '&:hover': {
        backgroundColor: theme.palette.primary.main
    }
}));


function MenuButton({menuName}) {
    const {currentMenu, setCurrentMenu} = useContext(MyContext);
    const handleMenuClick = () => {
        setCurrentMenu(menuName);
    }
    return (
        <span onClick={handleMenuClick}>
            <MenuButtonS
                sx={{borderColor: currentMenu === menuName ? 'white' : ''}}
                variant="contained"
            >Statistics</MenuButtonS>
        </span>
    );
}

export default MenuButton;