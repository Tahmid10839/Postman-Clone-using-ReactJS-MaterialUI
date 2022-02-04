import { TextareaAutosize, Typography, Box } from '@mui/material';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import "codemirror/mode/javascript/javascript.js";
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';

// const textStyle = {
//     width: '100%',
//     padding: 10,
//     background: 'url(http://i.imgur.com/2cOaJ.png)',
//     // backgroundAttachment: 'local',
//     backgroundRepeat: 'no-repeat',
//     paddingLeft: 35,
//     paddingTop: 10,
//     borderColor: '#ccc',
//     outline: 'none',
// }

const useStyles = makeStyles({
    box: {
        // height: ['150px', '!important'],
        border: '1px solid #ccc',
    },
    codemirror: {
        // height: ['100%', '!important'],
        // overflow: 'hidden',
    }
})

const cmOptions = {
    theme: "default",
    viewportMargin: Infinity,
    // mode: {
    //     name: "javascript",
    //     json: true,
    //     statementIndent: 2
    // },
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
    const [value, setValue] = useState('')

    const handleChange = (editor, data, value) => {
        setValue(value)
    }

    return (
        <>
            <Typography mt={1} mb={1}>
                JSON Content
            </Typography>
            {/* <TextareaAutosize
                minRows={3}
                maxRows={5}
                style={textStyle}
            /> */}
            <Box className={classes.box}>
                <ControlledEditor
                    onBeforeChange={handleChange}
                    value={value}
                    className={classes.codemirror}
                    options={cmOptions}
                />
            </Box>

        </>
    )
};

export default CreateJsonText;
