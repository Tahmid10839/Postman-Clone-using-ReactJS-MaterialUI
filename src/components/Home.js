import React, { useContext, useState } from 'react';
import Form from './Form';
import Header from './Header';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Tabbar from './Tabbar';
import Response from './Response';
import ErrorScreen from './ErrorScreen';
import { AppContext } from '../context/DataProvider';
import { checkParams } from '../utils/utils';
import SnackBar from './Snackbar';
import { getData } from '../service/api';
import axios from 'axios';

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
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [errorResponse, setErrorResponse] = useState(false)
    const [apiResponse, setApiResponse] = useState('')
    const [status, setStatus] = useState('')
    const [time, setTime] = useState('')
    const [size, setSize] = useState('')
    const { paramData, headerData, formData, jsonText } = useContext(AppContext)

    const onSendClick = async () => {
        if (!checkParams(formData, paramData, headerData, jsonText, setErrorMsg)) {
            setError(true)
            return false
        }

        // let response = await getData(paramData, headerData, formData, jsonText, setStatus)
        await getData(paramData, headerData, formData, jsonText, setStatus, setApiResponse, setErrorResponse, setTime, setSize)

        // if (response === 'error') {
        //     setErrorResponse(true)
        //     return;
        // }

        // setErrorResponse(false)
        // setApiResponse(response.data)
        // setStatus(response.status)
        // console.log(response)

    }

    return (
        <div>
            <Header />
            <Box className={classes.box}>
                <Form onSendClick={onSendClick} />
                <Tabbar />
                {errorResponse ? <ErrorScreen status={status} /> : <Response data={apiResponse} status={status} time={time} size={size} />}
                {error && <SnackBar error={error} setError={setError} errorMsg={errorMsg} />}
            </Box>
        </div>
    )
};

export default Home;
