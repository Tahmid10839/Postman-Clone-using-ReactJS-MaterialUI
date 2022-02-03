import React from 'react';
import { Box, Select, MenuItem, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    select: {
        width: 150,
        height: 40,
    },
    textfield: {
        background: '#f6f6f6',
        width: '100%'
    },
    button: {
        width: 100,
        height: 40,
        marginLeft: [5, '!important'],
    }
})

const Form = () => {
    const classes = useStyles()
    return (
        <Box className={classes.box}>
            <Select
                className={classes.select}
                value={'POST'}
            >
                <MenuItem value={'POST'}>POST</MenuItem>
                <MenuItem value={'GET'}>GET</MenuItem>
            </Select>
            <TextField
                size="small"
                className={classes.textfield}
                placeholder='Enter URL Here...'
            />
            <Button
                variant="contained"
                className={classes.button}
            >
                Send
            </Button>
        </Box>
    )
};

export default Form;
