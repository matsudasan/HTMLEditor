import React from 'react';
import {useRecoilState} from 'recoil';
import{TabState} from "../atom/atom"
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const a11yProps = (index: any) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const SimpleTab: React.FC = () => {
    const classes = useStyles();
    const [value, setValue] = useRecoilState(TabState);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs 
                value={value} 
                onChange={handleChange} 
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                >
                    <Tab label="HTML" {...a11yProps(0)} />
                    <Tab label="CSS" {...a11yProps(1)} />
                    <Tab label="JS" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
        </div>
    )
}

export default SimpleTab