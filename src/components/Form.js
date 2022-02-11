import React, { useContext } from 'react';
import { Box, Select, MenuItem, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { AppContext } from '../context/DataProvider';

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

const Form = ({ onSendClick }) => {
    const classes = useStyles()
    const { formData: { url, type }, setFormData } = useContext(AppContext)

    const handleChange = (e) => {
        setFormData(prev => (
            { ...prev, type: e.target.value }
        ))
    }

    const onUrlChange = (e) => {
        setFormData(prev => (
            { ...prev, url: e.target.value }
        ))
    }

    return (
        <Box className={classes.box}>
            <Select
                className={classes.select}
                value={type}
                onChange={(e) => handleChange(e)}
            >
                <MenuItem value={'GET'}>GET</MenuItem>
                <MenuItem value={'POST'}>POST</MenuItem>
            </Select>
            <TextField
                size="small"
                className={classes.textfield}
                placeholder='Enter URL Here...'
                value={url}
                onChange={(e) => onUrlChange(e)}
            />
            <Button
                variant="contained"
                className={classes.button}
                onClick={onSendClick}
            >
                Send
            </Button>
        </Box>
    )
};

export default Form;
