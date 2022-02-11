import { TextareaAutosize, Typography, Box } from '@mui/material';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import "codemirror/mode/javascript/javascript.js";
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';
import { useContext, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { AppContext } from '../context/DataProvider';

const useStyles = makeStyles({
    box: {
        marginTop: [20, '!important'],
    },
    editorContainer: {
        border: '1px solid #ccc',
    },

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
    tabSize: 2
};

const CreateJsonText = () => {
    const classes = useStyles()
    const { jsonText, setJsonText } = useContext(AppContext)

    const handleChange = (editor, data, value) => {
        setJsonText(value)
    }

    return (
        <Box className={classes.box}>
            <Typography mt={1} mb={1}>
                JSON Content
            </Typography>
            <Box className={classes.editorContainer}>
                <ControlledEditor
                    onBeforeChange={handleChange}
                    value={jsonText}
                    className={classes.codemirror}
                    options={cmOptions}
                />
            </Box>

        </Box>
    )
};

export default CreateJsonText;
