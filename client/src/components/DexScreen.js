import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from "../redux/Actions";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Gif from "../img/whoisthatpokemon.gif";
import Gif2 from "../img/whoisthatpokemon2.gif";
import Pokemon from "../img/pokemon.png";
import Signo from "../img/signo.png";
import Pokeball from "../img/pokeball.png";
import GameOverScreen from "./GameOverScreen";
import "../fonts/fonts.css"; 


const useStyles = makeStyles((theme) => ({

    Screen: {
        height: "36vh",
        backgroundRepeat: 'no-repeat',
        backgroundSize: "100% 100%",
        border: "0.2em solid black",
        borderRadius: "0.8em",
    },

    Poke: {
        height: "25vh",
        backgroundRepeat: 'no-repeat',
        backgroundSize: "100% 100%",
        backgroundPosition: "50% 50%",
        marginLeft: "-1em",
        marginTop: "-0.8em",
    },

    TitlePokemon: {
        height: "8vh",
        backgroundImage: `url(${Pokemon})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "90% 95%"
    },

    Signo: {
        height: "16vh",
        backgroundImage: `url(${Signo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "100% 100%"
    },

    Life: {
        height: "3vh",
        backgroundImage: `url(${Pokeball})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "100% 100%",
        marginTop: "0.5em",
        marginRight: "0.5em"
    }
    
}));


function DexScreen({ start, pokeCatch, pokeRevelate, lifes}) {

    const classes = useStyles();

    return (

        <>

            { start !== 3 ?
        
                <Grid 
                    container className={classes.Screen} direction="row" justify="center" alignItems="center" xs={11}
                    style={start === 2 && !pokeRevelate ? {backgroundImage: `url(${Gif}?a=${Math.random()})`} :
                    pokeRevelate ? {backgroundImage: `url(${Gif2}?a=${Math.random()})`} : { backgroundColor: "black"}}
                >

            
                    <Grid item container direction="row" justify="flex-end" alignItems="center"  xs={12}>

                        {  
                            lifes.length && start === 2 ? lifes.map(life => <Grid item className={classes.Life} xs={1}/>) : 
                            <Grid item style={{height: "3vh"}} xs={1}/>
                        }


                    </Grid>
      
                    <Grid item container style={{height: "23vh"}} direction="row" justify="space-around" alignItems="center" xs={12}>

                        <Grid 
                            item className={classes.Poke} xs={6}
                            style={ start === 2 && !pokeRevelate ? {backgroundImage: `url(${pokeCatch.img})`, filter: "brightness(0.05)"} :
                            pokeRevelate ? {backgroundImage: `url(${pokeCatch.img})`, filter: "brightness(1)"} : 
                            {backgroundColor: "black"}}
                        /> 

                        <Grid item container direction="row" justify="center" alignItems="center" xs={4}>

                            { 
                                start === 2 && !pokeRevelate ? <Grid item className={classes.Signo} xs={6}/> :
                                pokeRevelate ? <Grid item container direction="row" justify="center" alignItems="center" className="pokeName" style={{marginLeft:"-2em"}} xs={12}>
                                {pokeCatch.name} 
                                </Grid> :
                                <div/> 
                            }

                        </Grid>

                    </Grid>

                    <Grid item container direction="row" justify="flex-end" alignItems="flex-start" xs={12}>

                        { start !== 1 ? <Grid item className={classes.TitlePokemon} xs={8}/> : <div/>}
                
                    </Grid>

                </Grid> : 

                <GameOverScreen/>
            }
        </>

    );
}

function mapStateToProps(state) {
    return {
        start: state.start,
        pokeCatch: state.pokeCatch,
        pokeRevelate: state.pokeRevelate,
        lifes: state.lifes,
    }
}
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(DexScreen);