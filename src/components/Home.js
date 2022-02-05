import React from 'react';
import Form from './Form';
import Header from './Header';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Tabbar from './Tabbar';
import Response from './Response';
import ErrorScreen from './ErrorScreen';

const useStyles = makeStyles({
    box: {
        width: '60%',
        margin: '50px auto 0 auto',
        ['@media (max-width: 990px)']: {
            width: '90%',
        },
    }
})

const Home = () => {
    const classes = useStyles()
    return (
        <div>
            <Header />
            <Box className={classes.box}>
                <Form />
                <Tabbar />
                <Response />
                {/* <ErrorScreen /> */}
            </Box>
        </div>
    )
};

export default Home;
