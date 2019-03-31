import React from 'react';
import TextField from '@material-ui/core/TextField';
//import Input from '@material-ui/core/Input';

export const Search = ({value, changed}) => {
    return (
        <div>
            <TextField id="standard-name"
                label="FIND YOUR MOVIE"
                //className={classes.textField}
                value={value}
                onChange={changed}
                margin="normal"/>
        </div>
    )
}