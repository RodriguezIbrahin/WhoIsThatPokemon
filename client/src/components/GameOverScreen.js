import React from 'react';
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from "../redux/Actions";
import { makeStyles } from '@material-ui/core/styles';
import pikachu from "../img/pikachu.gif";
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';
import KeyboardReturnOutlinedIcon from '@material-ui/icons/KeyboardReturnOutlined';
import "../fonts/fonts.css";

const useStyles = makeStyles((theme) => ({

    Screen: {
        height: "36vh",
        backgroundColor: "#8bc34a",
        border: "0.2em solid black",
        borderRadius: "0.8em",
    },

    Pikachu: {
        height: "5vh",
        width: "5vh",
        backgroundImage: `url(${pikachu})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "100% 100%",
        marginBottom: "-0.6em"
    },

    Alfabeto: {
        height: "4vh",
        border: "0.1em solid black",
        borderRadius: "0.5em",
        cursor: "pointer",
        '&:hover': {
            backgroundColor: "#558b2f",
        },
    },


}));


function GameOverScreen({ letterSelect, nick, sendNick, ranking, Nick , SelectLetterClick}) {

    const classes = useStyles();

    let Alfabeto = [
        "A","B","C","D","E","F","G","H","I","J","K","L","M",
        "N","O","P","Q","R","S","T","U","V","W","X","Y","Z","DELETE","SEND"
    ]

    return (

        <>
            { 
                !sendNick ?
            
                    <Grid container className={ `${classes.Screen} ${"pokeText"}`} direction="row" justify="center" alignItems="flex-start" xs={11}>
             
                        <Grid item container justify="center" style={{marginTop: "1em", fontSize: "1.5em"}} xs={12}>
                           <b>GameOver </b>
                        </Grid>

                        <Grid item container justify="flex-start" alignItems="flex-end" xs={6}>
                           {nick} <div className={classes.Pikachu}/>
                        </Grid>

                        <Grid item container justify="center" alignItems="center" xs={10}>

                            {  Alfabeto.length ? Alfabeto.map((letter, index) => 

                                <Grid 
                                   item container className={classes.Alfabeto}
                                   onClick={() => {
                                       Nick(index) ;
                                       SelectLetterClick(index) ;
                                    }}
                                   style={ Alfabeto[letterSelect] === letter ? {backgroundColor: "#558b2f"} : {}}
                                   justify="center" alignItems="center" className={classes.Alfabeto} xs={2}
                                >
                                    {
                                       letter === "DELETE" ? <BackspaceOutlinedIcon/> :
                                       letter === "SEND" ? <KeyboardReturnOutlinedIcon/> : letter 
                                    } 

                                </Grid>) :

                                <Grid/>
                            }
               
                        </Grid>
                
                    </Grid> 
                :
                <Grid container className={ `${classes.Screen} ${"pokeText"}`} direction="row" justify="center" alignItems="flex-start" xs={11}>

                    <Grid item container style={{height: "10vh"}} justify="center" alignItems="center" xs={6}>
                        <b>{nick}</b>
                    </Grid>
                    
                    <Grid item xs={7}>
                        { ranking.length ? ranking[0].nick : "Score" }
                    </Grid>
               
                    <Grid item container direction="row" justify="flex-end" alignItems="center" xs={3}>
                        { ranking.length ? ranking[0].score : "0" }
                    </Grid>

                    <Grid item xs={7}>
                        {ranking.length ? ranking[1].nick : "Score" }
                    </Grid>
               
                    <Grid item container direction="row" justify="flex-end" alignItems="center" xs={3}>
                        { ranking.length ? ranking[1].score : "0" }
                    </Grid>

                    <Grid item xs={7}>
                        {ranking.length ? ranking[2].nick : "Score" }
                    </Grid>
               
                    <Grid item container direction="row" justify="flex-end" alignItems="center" xs={3}>
                        { ranking.length ? ranking[2].score : "0" } 
                    </Grid>

                </Grid>

            }

        </>

    );
    
}


function mapStateToProps(state) {
    return {
        score: state.score,
        letterSelect: state.letterSelect,
        nick: state.nick,
        sendNick: state.sendNick,
        ranking: state.ranking
    }
}
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(GameOverScreen);
