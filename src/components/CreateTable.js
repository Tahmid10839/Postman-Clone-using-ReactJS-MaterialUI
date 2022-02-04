import { Box, Typography, Table, TableHead, TableRow, TableBody, TableCell } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import AddRow from './AddRow';

const useStyles = makeStyles({
    tableCell: {
        border: '1px solid rgba(224,224,224,1)',
        borderCollapse: 'collapse',
        padding: ['7px 5px', '!important'],
        fontWeight: ['bold', '!important'],
    }
})

const CreateTable = ({ text }) => {
    const classes = useStyles()
    return (
        <Box>
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
                    <AddRow />
                </TableBody>
            </Table>
        </Box>
    )
};

export default CreateTable;
