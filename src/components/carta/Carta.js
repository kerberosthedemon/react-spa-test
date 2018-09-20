import React, { Fragment } from 'react';
import { Card, CardContent, Grid, TextField, Typography } from '@material-ui/core';
import TextoTipo from './../textoTipo/TextoTipo';

const style ={
    Card:{
        width: '40vw',
        margin: 'auto'
    }
}

const Carta = (props) => {
    if(!props.pokemonSeleccionado.valido()) return(<Fragment></Fragment>);

    return(
        <CardContent>
            <Card style={style.Card}>
                <CardContent>
                    <Grid container alignItems="center" style={style.Grid} spacing={24}>
                        <Grid item>
                            <TextField variant="outlined" inputProps={{readOnly: true}} label="Numero" value={props.pokemonSeleccionado.id}></TextField>
                        </Grid>
                        
                        <Grid item>
                            <TextField variant="outlined" inputProps={{readOnly: true}} label="Nombre" value={props.pokemonSeleccionado.name}></TextField>
                        </Grid>

                        <Grid item>
                            <Typography variant="outlined"  label="Tipo">
                                {props.pokemonSeleccionado.types.map(tipo => { return <TextoTipo texto={tipo}/> })}
                            </Typography>
                        </Grid>

                        <Grid item>
                            <img alt='' src={props.pokemonSeleccionado.sprites.front_default} />
                        </Grid>
                        <Grid item>
                            <img alt='' src={props.pokemonSeleccionado.sprites.back_default} />
                        </Grid>
                    </Grid>
                    
                </CardContent>
            </Card>
        </CardContent>
    );
}

export default Carta;