import { TableRow, TableCell, Checkbox, TextField, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';

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
    },
    box: {
        position: 'absolute',
        right: -30,
        top: 10,
    },
    button: {
        borderRadius: ['50%', '!important'],
        padding: ['20px 13px', '!important'],
        lineHeight: [0, '!important'],
        minWidth: ['20px', '!important'],
    }
})

// const AddRow = ({ setRows, rowId, rows, keyValue, value }) => {
const AddRow = ({ rows, setRows }) => {
    const classes = useStyles()
    // const [check, setCheck] = useState(false)
    // const [key, setKey] = useState('')
    // const [lastIndex, setLastIndex] = useState(1)
    // let row = [...rows]
    // const [rows, setRows] = useState([{ id: 1, key: '', value: '', check: false }])
    // console.log(rows);

    // useEffect(() => {
    //     setData(rows)
    // }, [rows])

    // console.log(data);
    const handleChange = (e, index) => {
        // if (!check) {
        //     setCheck(true)
        //     setRows(prev => [...prev, rowId])
        // } else {
        //     setCheck(false)
        // }
        let row = [...rows]
        row[index] = { ...row[index], check: !row[index]['check'] }
        setRows(row)
    }

    const handleKey = (e, index) => {
        // console.log(keyValue.length);
        if ((rows[index]['key'].length === 0 || rows[index]['key'].length !== 0) && rows[index + 1] === undefined) {
            // setCheck(true)
            let row = [...rows]
            row[index] = { ...row[index], check: true, key: e.target.value }
            setRows(row)
            // setLastIndex(lastIndex + 1)
            setRows(prev => ([...prev, { id: row[index]['id'] + 1, key: '', value: '', check: false }]))
        } else {
            let row = [...rows]
            row[index] = { ...row[index], key: e.target.value }
            setRows(row)
        }
    }

    const handleValue = (e, index) => {
        // console.log(keyValue.length);
        if (((rows[index]['value'].length === 0) || rows[index]['value'].length !== 0) && rows[index + 1] === undefined) {
            let row = [...rows]
            row[index] = { ...row[index], check: true, value: e.target.value }
            setRows(row)
            setRows(prev => ([...prev, { id: row[index]['id'] + 1, key: '', value: '', check: false }]))
        } else {
            let row = [...rows]
            row[index] = { ...row[index], value: e.target.value }
            setRows(row)
        }
    }

    const handleRemove = (id) => {
        setRows(rows.filter(row => row.id !== id))
    }

    return (
        <>
            {
                rows.map((row, index) => (
                    <TableRow key={index}>
                        <TableCell align='center' className={classes.tableCell}>
                            <Checkbox
                                size='large'
                                className={classes.checkBox}
                                checked={row.check}
                                onChange={(e) => handleChange(e, index)}
                            />
                        </TableCell>
                        <TableCell className={classes.tableCell}>
                            <TextField
                                value={row.key}
                                onChange={(e) => handleKey(e, index)}
                                className={classes.textField}
                                inputProps={{
                                    style: {
                                        height: 30,
                                        padding: '0 5px',
                                    }
                                }}
                            />
                        </TableCell>
                        <TableCell className={classes.tableCell} style={{ position: 'relative' }}>
                            <TextField
                                value={row.value}
                                onChange={(e) => handleValue(e, index)}
                                className={classes.textField}
                                inputProps={{
                                    style: {
                                        height: 30,
                                        padding: '0 5px',
                                    }
                                }}
                            />
                            {index !== 0 && (
                                <Box className={classes.box}>

                                    <Button onClick={() => handleRemove(row.id)} className={classes.button} color="error" size="large" >&times;</Button>
                                </Box>
                            )}

                        </TableCell>
                    </TableRow>
                ))
            }
        </>
    )
};

export default AddRow;
