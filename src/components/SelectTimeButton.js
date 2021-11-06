import React, {useContext} from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MyContext from "../Context/MyContext";

export default function SelectTimeButton() {
    const {time, setTime} = useContext(MyContext);

    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setTime(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <FormControl
                sx={{minWidth: 80}}
            >
                <Select
                    size={"small"}
                    sx={{borderRadius: '20px', fontSize: '12px', color: 'text.secondary'}}
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={time}
                    onChange={handleChange}
                >
                    <MenuItem value={'alltime'} sx={{fontSize: '12px', color: 'text.secondary'}}>
                        All time
                    </MenuItem>

                    <MenuItem value={'today'} sx={{fontSize: '12px', color:'text.secondary'}}>
                        Today
                    </MenuItem>

                </Select>
            </FormControl>
        </div>
    );
}