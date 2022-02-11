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
        marginTop: [50, '!important'],
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
    readOnly: 'cursor',
    beautify: true,
};


const Response = ({ data, status, time, size }) => {
    const classes = useStyles()

    return (
        <Box className={classes.container}>
            <Typography mt={1} style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                Response
            </Typography>
            <Box className={classes.info}>
                <Typography>
                    Status: {status}
                </Typography>
                <Typography>
                    Time: {time ? `${time}ms` : ''}
                </Typography>
                <Typography>
                    Size: {size}
                </Typography>
            </Box>
            <Box className={classes.responseContainer}>
                <ControlledEditor
                    // onBeforeChange={handleChange}
                    value={data.length === 0 ? '' : JSON.stringify(data, null, 2)}
                    // className={classes.codemirror}
                    options={cmOptions}
                />
            </Box>

        </Box>
    )
};

export default Response;
