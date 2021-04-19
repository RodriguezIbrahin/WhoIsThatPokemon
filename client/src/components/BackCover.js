import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from "../redux/Actions";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import "../fonts/fonts.css"; 

const useStyles = makeStyles((theme) => ({

    BackCover: {
        height: "82vh",
        backgroundColor: "#b71c1c",
        border: "0.4em solid black",
        borderRadius: "0em 2em 2em 0em",
    },

    StepOne: {
        height: "8vh",
        backgroundColor: "#263238",
        borderBottom: "0.4em solid black",
        borderRadius: "0em 0em 0em 5em",
        marginRight: "-0.4em",
        marginTop: "-0.4em",
    },

    StepTwo: {
        height: "30vh",
        backgroundColor: "#8bc34a",
        border: "0.3em solid black",
        borderRadius: "1em",
        paddingTop: "2.5em"
    },

    StepThree: {
        height: "5vh",
        backgroundColor: "#90a4ae",
        border: "0.2em solid black",
        borderRadius: "0.5em",
    },

}));

function BackCover({ score, start }) {

    const classes = useStyles();

    let arr = [null,null,null,null,null,null]; 

    return (

        <Grid className={classes.BackCover} item container direction="row" justify="center" alignItems="flex-start" xs={11} sm={8} md={4}>
            
            <Grid item container direction="row" justify="flex-end" alignItems="flex-start" xs={12}>

                <Grid item className={classes.StepOne} xs={5}/>

            </Grid>

            <Grid item container direction="row" justify="center" alignItems="flex-start" xs={12}>

                <Grid item container direction="row" justify="center" alignItems="center" xs={6}>. . . . . . . . . .</Grid>

                {
                    start === 2 ?     
                
                        <Grid item className={`${classes.StepTwo} ${"pokeText"}`} container direction="row" justify="center" alignItems="flex-start" xs={9}>

                            <Grid item container direction="row" justify="flex-end" alignItems="center" xs={8} md={6} lg={5}>
                                Score:
                            </Grid>

                            <Grid item container direction="row" justify="flex-end" alignItems="center" xs={3} md={5} lg={6}>
                                {score.score}
                            </Grid>

                            <Grid item container direction="row" justify="flex-end" alignItems="center" xs={8} md={6} lg={5}>
                                Catch:
                            </Grid>

                            <Grid item container direction="row" justify="flex-end" alignItems="center" xs={3} md={5} lg={6}>
                                {score.catch}
                            </Grid>

                            <Grid item container direction="row" justify="flex-end" alignItems="center" xs={8} md={6} lg={5}>
                                Fail:
                            </Grid>

                            <Grid item container direction="row" justify="flex-end" alignItems="center" xs={3} md={5} lg={6}>
                                {score.fail}
                            </Grid>

                            <Grid item container direction="row" justify="flex-end" alignItems="center" xs={8} md={6} lg={5}>
                                Success:
                            </Grid>

                            <Grid item container direction="row" justify="flex-end" alignItems="center" xs={3} md={5} lg={6}>
                                {score.success}
                            </Grid>

                        </Grid>

                    : start === 1 ?

                        <Grid  item className={`${classes.StepTwo} ${"pokeText"}`} container direction="row" justify="center" alignItems="flex-start" xs={11}>

                            <Grid item container direction="row" justify="center" alignItems="center" xs={12} sm={8}>
                                <b>{"¿Quien es ese "}</b>
                            </Grid>

                            <Grid item container direction="row" justify="center" alignItems="center" xs={12} sm={3}>
                                <b>{"POKEMON?"}</b>
                            </Grid>

                            <Grid item container direction="row" justify="center" alignItems="center" xs={12}>
                                {"Pulsa Start"}
                            </Grid>

                            <Grid item container direction="row" justify="center" alignItems="center" xs={12} >
                                {"y adivina "}
                            </Grid>

                            <Grid item container direction="row" justify="center" alignItems="center" xs={12} >
                                {"los pokemon"}
                            </Grid>

                            <Grid item container direction="row" justify="center" alignItems="center" xs={12}>
                                {"Tienes 4 vidas"}
                            </Grid>

                        </Grid>

                    :
                        <Grid  item className={`${classes.StepTwo} ${"pokeText"}`} container direction="row" justify="center" alignItems="flex-start" xs={9}>

                            <Grid item container direction="row" style={{marginTop: "-0.5em"}} justify="center" alignItems="center" xs={12} sm={6}>
                                <b>{"¿Quien es ese "}</b>
                            </Grid>

                            <Grid item container direction="row" style={{marginTop: "-0.5em"}}  justify="center" alignItems="center" xs={12} sm={4}>
                                <b>{"POKEMON?"}</b>
                            </Grid>

                            <Grid item container direction="row" justify="center" alignItems="center" xs={12}>
                                {"Selecciona "}
                            </Grid>

                            <Grid item container direction="row" justify="center" alignItems="center" xs={12} >
                                {"tu nick"}
                            </Grid>

                            <Grid item container direction="row" justify="center" alignItems="center" xs={12} >
                                {"Y entra"}
                            </Grid>

                            <Grid item container direction="row" justify="center" alignItems="center" xs={12}>
                                {"al Ranking"}
                            </Grid>

                        </Grid>
                }

                <Grid item container style={{margin: "0.5em"}} xs={9}>

                    {arr.length ? arr.map(element => <Grid item className={classes.StepThree} xs={2}/>) : <Grid/>}
                    {arr.length ? arr.map(element => <Grid item className={classes.StepThree} xs={2}/>) : <Grid/>}

                </Grid>

                <Grid item container direction="row" justify="flex-end" alignItems="center" xs={11}>

                   <Grid item className={classes.StepThree} style={{height: "1vh", backgroundColor: "#37474f"}} xs={2}/>
                   <Grid item className={classes.StepThree} style={{height: "1vh", backgroundColor: "#37474f"}} xs={2}/>

                </Grid>

                <Grid item container direction="row" justify="flex-start" alignItems="center" xs={11}>

                    <Grid item container direction="row" justify="flex-start" alignItems="center" xs={8}>

                        <Grid item className={classes.StepThree} style={{height: "3vh", backgroundColor: "red", borderRadius: "2em"}} xs={1}/>
                        <Grid item className={classes.StepThree} style={{height: "3vh", backgroundColor: "red", borderRadius: "2em"}} xs={1}/>

                    </Grid>
                
                </Grid>

                <Grid item container style={{marginTop: "0.2em"}} direction="row" justify="space-between" alignItems="center" xs={11}>

                    <Grid item container xs={3}>
                        <Grid item className={classes.StepThree} style={{height: "4vh", backgroundColor: "#cfd8dc"}} xs={5}/>
                        <Grid item className={classes.StepThree} style={{marginLeft: "0.2em", height: "4vh", backgroundColor: "#cfd8dc"}} xs={5}/>
                    </Grid>

                    <Grid item container direction="row" justify="flex-start" alignItems="center" xs={3}>. . . . . . . . . .</Grid>

                    <Grid item className={classes.StepThree} style={{height: "8vh", backgroundColor: "#ffee58", borderRadius: "3em"}} xs={2}/>

                </Grid>

                <Grid item container style={{marginTop: "2em", marginBottom: "2em"}} direction="row" justify="space-between" alignItems="center" xs={11}>

                    <Grid item className={classes.StepThree} style={{ backgroundColor: "#37474f"}} xs={5}/>
                    
                    <Grid item className={classes.StepThree} style={{ backgroundColor: "#37474f"}} xs={5}/>

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
        score: state.score,
        start: state.start
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(BackCover);