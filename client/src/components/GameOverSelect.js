import React from 'react';
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from "../redux/Actions";
import "../fonts/fonts.css"; 


function GameOverSelect({ score , status, ranking}) {

    return (

        <Grid item container className="pokeText" direction="row" justify="center" alignItems="center" xs={12}> 
         
            <Grid style={{height: "15vh"}} item container direction="row" justify="flex-start" alignItems="center" xs={10}>
               
                <Grid item xs={8}>
                    { status && ranking.length ? ranking[0].nick : "Score" }
                </Grid>
               
                <Grid item container direction="row" justify="flex-end" alignItems="center" xs={4}>
                    { status && ranking.length ? ranking[0].score : score.score }
                </Grid>

                <Grid item xs={8}>
                   { status && ranking.length ? ranking[1].nick : "Catch"}
                </Grid>
               
                <Grid item container direction="row" justify="flex-end" alignItems="center" xs={4}>
                    { status && ranking.length ? ranking[1].score : score.catch }
                </Grid>

                <Grid item xs={8}>
                    { status && ranking.length ? ranking[2].nick : "Success" }
                </Grid>
               
                <Grid item container direction="row" justify="flex-end" alignItems="center" xs={4}>
                    { status && ranking.length ? ranking[2].score : score.success }
                </Grid>

            </Grid>
                
        </Grid>

    );
}


function mapStateToProps(state) {
    return {
        score: state.score,
        ranking: state.ranking
    }
}
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(GameOverSelect);
