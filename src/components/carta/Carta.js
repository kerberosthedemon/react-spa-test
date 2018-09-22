import React from 'react';
import { Card, CardContent, Grid, TextField } from '@material-ui/core';
import TextoTipo from './../textoTipo/TextoTipo';
import TextFieldWithJSX from '../TextFieldWithJSX/TextFieldWithJSX';

const style ={
    Card:{
        width: '45vw',
        margin: 'auto',
        minWidth: '280px'
    }
}

const Carta = (props) => {
    if(!props.pokemonSeleccionado.valido()) return(<span></span>);

    return(
        <CardContent style={props.style}>
            <Card style={style.Card}>
                <CardContent>
                    <Grid container alignItems="center" style={style.Grid} spacing={8}>
                        <Grid item xs={12}>
                            <Grid container spacing={8}>
                                <Grid item xs={5} style={{minWidth:'228px', maxWidth:'228px'}}>
                                    <TextFieldWithJSX multiline={true} rows={5} label="Sprite" variant="outlined" jsx={<React.Fragment><img alt='' src={props.pokemonSeleccionado.sprites.front_default} /><span> </span><img alt='' src={props.pokemonSeleccionado.sprites.back_default} /></React.Fragment>}/>
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField variant="outlined" style={{minWidth:'76px'}} inputProps={{readOnly: true}} label="Numero" fullWidth={true} value={props.pokemonSeleccionado.id}></TextField>
                                </Grid>
                                
                                <Grid item xs>
                                    <TextField variant="outlined" inputProps={{readOnly: true}} label="Nombre" fullWidth={true} value={props.pokemonSeleccionado.name}></TextField>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <TextFieldWithJSX variant="outlined" label="Tipo" jsx={props.pokemonSeleccionado.types.map((tipo, i) => { return <TextoTipo texto={tipo}/> })}/>
                        </Grid>
                    </Grid>
                    
                </CardContent>
            </Card>
        </CardContent>
    );
}

export default Carta;