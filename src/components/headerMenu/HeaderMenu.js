import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const style = {
    Title:{
      color: 'white',
    },
}

const HeaderMenu = (props) => {
    return(
        <AppBar position="relative" style={{backgroundColor: '#0f0f0f'}}>
          <Toolbar variant="dense">
            <Typography variant="title" style={style.Title}>Pokedéx</Typography>
          </Toolbar>
        </AppBar>
    )
}

export default HeaderMenu