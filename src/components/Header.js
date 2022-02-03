import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    logo: {
        width: 120,
    }
})

const Header = () => {
    const classes = useStyles()
    const logo = "https://miro.medium.com/max/802/1*dLWPk_rziSpWhPx1UWONbQ@2x.png"
    return (
        <div>
            <img src={logo} alt="PostMan Logo" className={classes.logo} />
        </div>
    )
};

export default Header;
