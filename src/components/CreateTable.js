import { Box, Typography, Table, TableHead, TableRow, TableBody, TableCell } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import AddRow from './AddRow';

const useStyles = makeStyles({
    box: {
        marginTop: [20, '!important'],
    },
    tableCell: {
        border: '1px solid rgba(224,224,224,1)',
        borderCollapse: 'collapse',
        padding: ['7px 5px', '!important'],
        fontWeight: ['bold', '!important'],
    }
})

const CreateTable = ({ text }) => {
    const classes = useStyles()
    // const [rows, setRows] = useState([0])
    // const [rows, setRows] = useState([{ id: 1, key: '', value: '' }])
    // console.log(rows);

    return (
        <Box className={classes.box}>
            <Typography mt={1} mb={1}>{text}</Typography>
            <Table sx={{ minWidth: '100%', border: '1px solid rgba(224,224,224,1)' }}>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableCell}></TableCell>
                        <TableCell align="center" className={classes.tableCell}>KEY</TableCell>
                        <TableCell align="center" className={classes.tableCell}>VALUE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* {
                        rows.map((row, index) => {
                            const { id, key, value } = row
                            return <AddRow
                                key={id}
                                setRows={setRows}
                                rowId={index}
                                rows={rows}
                                keyValue={key}
                                value={value}
                            />
                        })
                    } */}
                    <AddRow />
                </TableBody>
            </Table>
        </Box>
    )
};

export default CreateTable;
