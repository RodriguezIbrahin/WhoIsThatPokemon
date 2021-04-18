import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from "../redux/Actions";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import GameOverSelect from "./GameOverSelect";
import "../fonts/fonts.css"; 


const useStyles = makeStyles((theme) => ({

    DexSelect: {
        height: "19vh",
        backgroundColor:"#8bc34a",
        border: "0.2em solid black",
        borderRadius: "1em", 
        marginBottom: "0.4em", 
        marginLeft: "-0.7em",
    },

    Options: {
        height: "4vh",  
    },

    Select: {
        backgroundColor:"#558b2f",
        borderRadius: "1em",
        padding: "0.5em"
    },

    Error:{
        backgroundColor:"#c62828",
        borderRadius: "1em",
        padding: "0.5em"      
    },

    Okeys:{
        backgroundColor:"#64dd17",
        borderRadius: "1em",
        padding: "0.5em"      
    },

}));

function DexSelect({selecCath, pokeCatch, pokeRandoms, start, PokeSelect, StateCatch, Score, Lifes}) {

    const classes = useStyles();

    React.useEffect(() => {

        if( pokeRandoms[3 - selecCath] === pokeCatch.name && PokeSelect ){
            StateCatch("ok");
            Score({ score: +10, success: 1, fail: 0, catch: 1 });
        }

        if( pokeRandoms[3 - selecCath] !== pokeCatch.name && PokeSelect ){ 
            StateCatch("error");
            Lifes(false);
            Score({ score: -20, success: 0, fail: 1, catch: 1 });
        }

        else if( start!== 1 && !PokeSelect ){ 
            StateCatch("loading");
        }
        
    });

    

    return (

        <Grid item container className={classes.DexSelect} direction="row" justify="center" alignItems="center" xs={12}>
           
            {start === 2 ?

                <Grid item container direction="row" justify="center" alignItems="center" xs={12}>
                     
                    <Grid 
                        className={
                            selecCath === 3 && !PokeSelect ? classes.Select :
                            PokeSelect && pokeRandoms[0] === pokeCatch.name ? classes.Okeys :
                            selecCath === 3 && PokeSelect && pokeRandoms[0] !== pokeCatch.name ? classes.Error :
                            classes.Options
                        }
                        item container direction="row" justify="flex-start" alignItems="center" xs={11}
                    >
               
                        <Grid item className="pokeText" xs={11}>
                           { pokeRandoms[0] }
                        </Grid>
               
                        <Grid item xs={1}>
                           {selecCath === 3 ? <KeyboardBackspaceIcon/> : " " }
                        </Grid>

                    </Grid>
           
                    <Grid
                        className={
                            selecCath === 2 && !PokeSelect ? classes.Select :
                            PokeSelect && pokeRandoms[1] === pokeCatch.name ? classes.Okeys :
                            selecCath === 2 && PokeSelect && pokeRandoms[1] !== pokeCatch.name ? classes.Error :
                            classes.Options
                        }
                        item container direction="row" justify="flex-start" alignItems="center" xs={11}
                    >
                        
                        <Grid item className="pokeText" xs={11}>
                            {pokeRandoms[1]}
                        </Grid>
               
                        <Grid item xs={1}>
                            {selecCath === 2 ? <KeyboardBackspaceIcon/> : " " }
                        </Grid>

                    </Grid>
           
                    <Grid
                        className={
                            selecCath === 1 && !PokeSelect ? classes.Select :
                            PokeSelect && pokeRandoms[2] === pokeCatch.name ? classes.Okeys :
                            selecCath === 1 && PokeSelect && pokeRandoms[2] !== pokeCatch.name ? classes.Error : 
                            classes.Options
                        }
                        item container direction="row" justify="flex-start" alignItems="center" xs={11}
                    >
                        
                        <Grid item className="pokeText" xs={11}>
                            {pokeRandoms[2]}
                        </Grid>
                
                        <Grid item xs={1}>
                            {selecCath === 1 ? <KeyboardBackspaceIcon/> : " " }
                        </Grid>
            
                    </Grid>
            
                </Grid> : 
                
                start === 1 ? <GameOverSelect status={true}/> : <GameOverSelect status={false}/>
                
            }

        </Grid>

    );
}

function mapStateToProps(state) {
    return {
        selecCath: state.selecCath,
        pokeCatch: state.pokeCatch,
        start: state.start,
        pokeRandoms: state.pokeRandoms,
    }
}
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(DexSelect);
