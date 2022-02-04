import { TableRow, TableCell, Checkbox, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';

const useStyles = makeStyles({
    tableCell: {
        border: '1px solid rgba(224,224,224,1)',
        borderCollapse: 'collapse',
        padding: ['7px 5px', '!important'],
    },
    checkBox: {
        padding: ['2px 5px', '!important'],
    },
    textField: {
        width: '100%',
    }
})

const AddRow = () => {
    const classes = useStyles()
    return (
        <TableRow>
            <TableCell align='center' className={classes.tableCell}>
                <Checkbox
                    size='large'
                    className={classes.checkBox}
                />
            </TableCell>
            <TableCell className={classes.tableCell}>
                <TextField
                    className={classes.textField}
                    inputProps={{
                        style: {
                            height: 30,
                            padding: '0 5px',
                        }
                    }}
                />
            </TableCell>
            <TableCell className={classes.tableCell}>
                <TextField
                    className={classes.textField}
                    inputProps={{
                        style: {
                            height: 30,
                            padding: '0 5px',
                        }
                    }}
                />
            </TableCell>
        </TableRow>
    )
};

export default AddRow;
