import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from "../redux/Actions";
import { Grid, Fab, Button, IconButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightSharpIcon from '@material-ui/icons/ArrowRightSharp';
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';
import VolumeOffRoundedIcon from '@material-ui/icons/VolumeOffRounded';
import DexScreen from "./DexScreen";
import DexSelect from "./DexSelect";
import PokeSound from "../sound/EsPOKEMON.mp3";

const useStyles = makeStyles((theme) => ({

    '@keyframes blinker': {
        from: {opacity: 1},
        to: {opacity: 0.5}
    },

    Active:{
        animationName: '$blinker',
        animationDuration: '0.25s',
        animationTimingFunction: 'linear',
        animationIterationCount:'infinite',
    },

    FrontCover: {
        height: "90vh",
        backgroundColor: "#b71c1c",
        border: "0.4em solid black",
        borderRadius: "2em 2em 0em 2em",
    },

    CircleOne: {
        height: "13vh",
        border: "0.8em double black",
        borderRadius: "4em",
        backgroundColor: "#64b5f6",
    },

    CircleTwo: {
        height: "4vh",
        border: "0.2em solid black",
        borderRadius: "5em",
        margin: "0.2em",
    },

    StepOne: {
        height: "15vh",
        borderBottom: "0.4em solid black",
        borderRadius: "0em 0em 3.9em 0em",
    },

    StepTwo: {
        height: "8vh",
        borderBottom: "0.4em solid black",
        borderRadius: "0em 1.5em 0em 0em",
    },

    StepFour: {
        height: "45vh",
        marginTop: "1em",
        backgroundColor: "#cfd8dc",
        borderBottom: "0.6em double black",
        borderLeft: "0.6em double black",
        borderTop: "0.3em solid black",
        borderRight: "0.3em solid black",
        borderRadius: "0em 0em 0em 4em",
    },

    ButtonStart: {
        color: "#cfd8dc",
        fontSize: '0.8rem',
        backgroundColor: "#37474f",
        height: "8vh", 
        width: "8vh",
        borderBottom: "0.6em double black",
        borderLeft: "0.6em double black",
        borderTop: "0.3em solid black",
        borderRight: "0.3em solid black",
        '&$disabled': {
            background: '#212121',
            color: '#cfd8dc',
        },
        '&:hover': {
            backgroundColor: "#263238",
        },
    },

    ButtonUpDown:{
        color: "#cfd8dc",
        fontSize: '0.8rem',
        backgroundColor: "#37474f",
        '&:hover': {
            backgroundColor: "#263238",
        },
        '&$disabled': {
            background: '#212121',
            color: '#cfd8dc',
        },
        height: "5vh", 
        width: "10vh",
        borderTop: "0.6em double black",
        borderLeft: "0.6em double black",
        borderBottom: "0.3em solid black",
        borderRight: "0.3em solid black",
        borderRadius: "0.8em",
    },
    disabled: {},

}));

function FrontCover({ 

    PokeRandomsReset, start, pokeNumber, PokePush, PokeCatch, 
    PokeRevelate, ResetPokeCath, SelectCatch, stateCatch, PokeReset,
    SelectLetter, sendNick, Nick, letterSelect, nick, PostRanking, score

}) {

    const classes = useStyles();

    const [selecte, setSelecte] = React.useState(false);

    const [disable, setDisable] = React.useState(false);

    const [PokeSelect, setPokeSelect] = React.useState(false);

    const [time, setTime] = React.useState(0);

    const [sound, setSound] = React.useState(true);

    const audio = new Audio(PokeSound);


    const Poke = () =>{

        let poke = Math.round(Math.random() * (152 - 1) + 1);
        let pokeIsRepite = pokeNumber.filter( number => number === poke );

        if( !pokeIsRepite.length ){
            PokePush(poke);
            return poke;
        }
        else return Poke();
    };

    const handleOnStart = (e) =>{
        if(sound){audio.play();}
        PokeRandomsReset();
        setDisable(false);
        setPokeSelect(false);
        PokeRevelate(false);
        ResetPokeCath();
        PokeCatch(Poke());
        setSelecte(true);

        let out = setTimeout(function() { 
            PokeRevelate(true); setSelecte(false); setPokeSelect(true); setDisable(true);
        }, 6500);

        setTime(out);
    };

    const handleSelect = (e) =>{
        setDisable(true);
        clearTimeout(time);
        setSelecte(false);
        PokeRevelate(true);
        setPokeSelect(true);

    };

    const handleReset = (e) =>{
        clearTimeout(time);
        setSelecte(false);
        setDisable(false);
        setPokeSelect(false);
        PokeReset()
    };

    const handleSelecNick = (e) =>{

        if( letterSelect === 27  && nick.length > 2 ){
            Nick(letterSelect);
            PostRanking({nick: nick, score: score.score, catch: score.catch});
        }
        else Nick(letterSelect);
    };


    const handleOnUp = (e) =>{
        SelectCatch("up");
    };

    const handleOnDown = (e) =>{
        SelectCatch("down");
    };

    const handleOnDownLetter = (e) =>{
        SelectLetter(true);
    };

    const handleOnUpLetter = (e) =>{
        SelectLetter(false);
    };

    return ( 

        <Grid className={classes.FrontCover} container direction="row" justify="center" alignItems="flex-start" xs={11} sm={8} md={4}>
            
            <Grid item container direction="row" justify="space-between" alignItems="flex-start" xs={12}>

                <Grid className={classes.StepOne} item container direction="row" justify="center" alignItems="center" xs={5}>

                    <Grid item xs={5} className={classes.CircleOne} />
                    
                </Grid>

                <Grid className={classes.StepTwo} item container direction="row" justify="flex-start" alignItems="center" xs={7}>

                    <Grid 
                        item style={{backgroundColor: "red"}} xs={1}
                        className={`${classes.CircleTwo} ${stateCatch === "error" ? classes.Active : ""}`}
                    />
                    
                    <Grid 
                        item style={{backgroundColor: "yellow"}} xs={1}
                        className={`${classes.CircleTwo} ${stateCatch === "loading" ? classes.Active : ""}`}
                    />
                    
                    <Grid 
                        item style={{backgroundColor: "green"}} xs={1}
                        className={`${classes.CircleTwo} ${stateCatch === "ok" ? classes.Active : ""}`}
                    />
                    
                </Grid>

                <Grid item container direction="row" justify="center" alignItems="center" xs={12}>

                    <Grid className={classes.StepFour} item container direction="row" justify="center" alignItems="flex-start" xs={11}>

                        <Grid item container direction="row" justify="center" alignItems="center"  xs={6}>

                            <Grid item className={classes.CircleTwo} style={{backgroundColor: "red", height: "2vh"}} xs={1}/>

                            <Grid item className={classes.CircleTwo} style={{backgroundColor: "red", height: "2vh"}} xs={1}/>

                        </Grid>

                        <DexScreen/>

                        <Grid item container style={{marginTop: "-0.3em"}} direction="row" justify="space-between" alignItems="center"  xs={10}>

                            <Grid item container direction="row" justify="center" alignItems="center"  xs={2}>

                                <Grid 
                                    tem container className={classes.CircleTwo} style={{backgroundColor: "red", height: "3.5vh", cursor: "pointer"}} 
                                    direction="row" justify="center" alignItems="center" xs={6}
                                    onClick={() => setSound(!sound)}
                                >
                                    {sound ? <VolumeUpRoundedIcon fontSize='inherit'/> : <VolumeOffRoundedIcon fontSize='inherit'/> }
                                    
                                </Grid>
                                
                            </Grid>

                            <Grid item container style={{height: "3vh"}} xs={1}>

                                <Grid item container style={{height: "0.5vh", backgroundColor: "black", marginBottom: "0.2vh"}} xs={12}/>
                                
                                <Grid item container style={{height: "0.5vh", backgroundColor: "black", marginBottom: "0.2vh"}} xs={12}/>
                                
                                <Grid item container style={{height: "0.5vh", backgroundColor: "black", marginBottom: "0.2vh"}} xs={12}/>
                                
                                <Grid item container style={{height: "0.5vh", backgroundColor: "black", marginBottom: "0.2vh"}} xs={12}/>
                                
                            </Grid>

                        </Grid>

                    </Grid>

                </Grid>

                <Grid item container direction="row" justify="center" alignItems="center" style={{height: "1.5vh"}} xs={12}>

                    <Grid 
                        item style={{backgroundColor: "red", height: "1vh"}} xs={4}
                        className={`${classes.CircleTwo} ${stateCatch === "error" ? classes.Active : ""}`}
                    
                    />
                    
                    <Grid 
                        item style={{backgroundColor: "green", height: "1vh"}} xs={4}
                        className={`${classes.CircleTwo} ${stateCatch === "ok" ? classes.Active : ""}`}
                    />
                    
                </Grid>

                <Grid item container style={{height: "24.5vh"}} direction="row" justify="flex-start" alignItems="center" xs={12}>

                    <Grid item container style={{height: "24.5vh"}} direction="row" justify="center" alignItems="flex-start" xs={2}>

                        <Fab 
                            classes={{ root: classes.ButtonStart, disabled: classes.disabled }} 
                            onClick={ 
                                start === 3 && !sendNick ? handleSelecNick : start === 3 && sendNick ? handleReset :
                                selecte ? handleSelect : handleOnStart
                            }
                        >
                            { selecte ? "Select" : start === 1 ? "Start" : start === 2  ? "Next" : start === 3 && !sendNick ? "Select" : "Reset" }
                        </Fab>

                        <Grid item container direction="row" justify="center" alignItems="center" xs={12}>
                            . . .
                        </Grid>

                    </Grid>

                    <Grid item container style={{height: "24.5vh"}} direction="row" justify="center" alignItems="flex-end" xs={8}>

                        <Grid item container direction="row" justify="center" alignItems="center" xs={12}>
                            . . . . . . . . . .
                        </Grid>

                        <DexSelect PokeSelect={PokeSelect}/>

                    </Grid>

                    <Grid item container style={{height: "23vh", marginLeft: "-0.2em"}} direction="row" justify="center" alignItems="center" xs={2}>

                        <Button 
                            style={{transform: "rotate(-90deg)",}} variant="contained" 
                            onClick={start === 3 ? handleOnUpLetter : handleOnUp}
                            classes={{ root: classes.ButtonUpDown, disabled: classes.disabled }} disabled={ start === 3 ? false : disable }
                        >
                            <ArrowRightSharpIcon/>
                        </Button>

                        <Button 
                            onClick={start === 3 ? handleOnDownLetter : handleOnDown} 
                            variant="contained" disabled={ start === 3 ? false : disable }
                            classes={{ root: classes.ButtonUpDown, disabled: classes.disabled }}
                            style={{
                                transform: "rotate(90deg)", borderBottom: "0.6em double black", 
                                borderRight: "0.6em double black", borderTop: "0.3em solid black", borderLeft: "0.3em solid black"
                            }}
                        > 
                            <ArrowRightSharpIcon/>
                        </Button>

                    </Grid>

                </Grid>

            </Grid>
            
        </Grid>                  

    );
}
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

function mapStateToProps(state) {
    return {
        pokeNumber: state.pokeNumber,
        start: state.start,
        stateCatch: state.stateCatch,
        sendNick: state.sendNick,
        letterSelect: state.letterSelect,
        nick: state.nick,
        score: state.score
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(FrontCover);