import React, { useState } from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import "codemirror/mode/javascript/javascript.js";
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        marginTop: [70, '!important'],
    },
    info: {
        display: 'flex',
        '& > *': {
            marginRight: [30, '!important'],
            marginBottom: [10, '!important'],
        }
    },
    responseContainer: {
        border: '1px solid #ccc',
    }
})

const cmOptions = {
    theme: "default",
    viewportMargin: Infinity,
    matchBrackets: true,
    autoCloseBrackets: true,
    mode: "application/ld+json",
    lineNumbers: true,
    lineWrapping: true,
    indentWithTabs: false,
    tabSize: 2,
    readOnly: 'nocursor',
};


const Response = () => {
    const classes = useStyles()
    const [value, setValue] = useState('')

    const handleChange = (editor, data, value) => {
        setValue(value)
    }
    return (
        <Box className={classes.container}>
            <Typography mt={1} style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                Response
            </Typography>
            <Box className={classes.info}>
                <Typography>
                    Status: 200
                </Typography>
                <Typography>
                    Time: 146ms
                </Typography>
                <Typography>
                    Size: 2356kb
                </Typography>
            </Box>
            <Box className={classes.responseContainer}>
                <ControlledEditor
                    onBeforeChange={handleChange}
                    value={value}
                    // className={classes.codemirror}
                    options={cmOptions}
                />
            </Box>

        </Box>
    )
};

export default Response;
