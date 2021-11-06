import React, {useContext} from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import countryFlagEmoji from "country-flag-emoji";
import MyContext from "../Context/MyContext";

export default function SelectCountryButton() {
    const {country, setCountry} = useContext(MyContext);

    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    const countries = countryFlagEmoji.list.map((item) => ({name: item.name, emoji: item.emoji}));

    return (
        <div>
            <FormControl
                sx={{minWidth: 120}}
            >
                <Select
                    size={"small"}
                    sx={{borderRadius: '20px', fontSize: '12px', color: 'text.secondary'}}
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={country}
                    onChange={handleChange}
                >
                    <MenuItem value={'worldwide'} style={{fontSize: '12px', color: 'text.secondary'}}>
                        <span style={{backgroundColor: 'grey'}}>🌐</span>
                        &nbsp;&nbsp;Worldwide
                    </MenuItem>
                    {
                        countries.map((item) => (
                            <MenuItem value={item.name} style={{fontSize: '12px', color: 'text.secondary'}}>
                                <span style={{backgroundColor: 'grey', padding: '0 2px'}}>{item.emoji}</span>
                                &nbsp;&nbsp;&nbsp;{item.name}
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </div>
    );
}