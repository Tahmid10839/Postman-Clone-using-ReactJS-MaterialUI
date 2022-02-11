import React from 'react'
import { Snackbar } from '@mui/material'

const SnackBar = ({ error, errorMsg, setError }) => {

    const handleClose = () => {
        setError(false)
    }

    return (
        <Snackbar
            open={error}
            autoHideDuration={3000}
            onClose={handleClose}
            message={errorMsg}
        // action={action}
        />
    )
}

export default SnackBar