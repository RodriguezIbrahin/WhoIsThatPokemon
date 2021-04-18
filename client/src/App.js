import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from "./redux/Actions";
import { Grid, Hidden } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import FrontCover from "./components/FrontCover";
import BackCover from "./components/BackCover";

const useStyles = makeStyles((theme) => ({

    BackGround: {
        width: "98vw",
        height: "97vh",
        backgroundColor: "#263238",
    },

}));

function App({ GetRanking }) {

    const classes = useStyles();

    React.useEffect(() => { GetRanking() });

    return (

        <Grid container className={classes.BackGround} direction="row" justify="center" alignItems="center">

            <Grid item container direction="row" justify="center" alignItems="flex-end">

               <FrontCover/>

               <Hidden mdDown>
                   <BackCover/>
               </Hidden>

            </Grid>

        </Grid>

    );
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect( null, mapDispatchToProps )(App);