import { Box, Tab, Tabs } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import CreateJsonText from './CreateJsonText';
import CreateTable from './CreateTable';

const useStyles = makeStyles({
    box: {
        marginTop: 10,
    },
    tab: {
        textTransform: ['none', '!important'],
        fontSize: [17, '!important'],
        color: ['black', '!important'],
    }
})

const TabPanel = (props) => {
    const { children, value, index } = props;

    return (
        <div
            hidden={value !== index}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

const Tabbar = () => {
    const classes = useStyles()
    const [value, setValue] = useState(0)
    return (
        <Box className={classes.box}>
            <Box>
                <Tabs
                    value={value}
                    onChange={(e, newValue) => setValue(newValue)}
                    TabIndicatorProps={{
                        sx: {
                            backgroundColor: '#F2683A',
                            height: 4,
                            bottom: 3,
                        },
                    }}
                >
                    <Tab label='Params' className={classes.tab} />
                    <Tab label='Headers' className={classes.tab} />
                    <Tab label='Body' className={classes.tab} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <CreateTable text={"Query Params"} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <CreateTable text={"Headers"} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <CreateJsonText />
            </TabPanel>
        </Box>
    )
};

export default Tabbar;
