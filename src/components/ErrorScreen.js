import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import error from '../images/error.PNG';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto',
        width: '400px',
    },
    errorShow: {
        display: 'flex',
        alignItems: 'center',
        background: '#ffcdd2',
        padding: '1px 10px',
        borderRadius: 40,
        margin: '10px 0',
    },
    button: {
        background: ['transparent', '!important'],
        textTransform: ['none', '!important'],
        color: ['#b71c1c', '!important'],
        '&:hover': {
            color: ['#448aff', '!important'],
        }
    }

})
// blue
const ErrorScreen = () => {
    const classes = useStyles()
    return (
        <Box className={classes.container}>
            {/* <img src="https://i.stack.imgur.com/01tZQ.png" alt="Error" /> */}
            <img src={error} alt="Error" width="200px" />
            <Typography mt={1}>
                Could not send request
            </Typography>
            <Box className={classes.errorShow}>
                <Typography mr={2}>
                    Error:
                </Typography>
                <Box style={{ height: '30px', width: '2px', background: '#ccc' }} />
                <Button className={classes.button}>
                    View in Console
                </Button>
            </Box>
            <a href="https://learning.postman.com/docs/sending-requests/troubleshooting-api-requests/" target="_blank" style={{ textDecoration: 'none', fontSize: '1.2rem' }}>
                Learn more about troubleshooting API requests
            </a>
        </Box>
    )
};

export default ErrorScreen;
