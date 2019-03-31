import React from 'react';
import "./styles.scss";
import TextField from '@material-ui/core/TextField';

class Middle extends React.PureComponent {
    render() {
        return <div className="trapezoid-1">
         <TextField id="standard-name"
                label="FIND YOUR MOVIE"
                //className={classes.textField}
                //value='jjjj'
               // onChange={this.handleChange('name')}
                margin="normal"/>
        </div>
    }
}

export default Middle;