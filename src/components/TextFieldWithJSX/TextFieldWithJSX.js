import React from 'react';
import { TextField, InputAdornment } from "@material-ui/core";

const TextFieldWithJSX = (props) => {
    return(
        // eslint-disable-next-line
        <TextField multiline={props.multiline} rows={props.rows} variant={props.variant}  label={props.label} inputProps={{readOnly: true, style:{ visibility: 'collapse', width: '0' }}} InputProps={{ startAdornment: (
            <InputAdornment position="start" style={{margin: '0', width: '100%'}}>
                {props.jsx}
            </InputAdornment>
        )}}/>
    )
}

export default TextFieldWithJSX