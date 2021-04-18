import { 
    START, POKEPUSH, POKECATCH, ERROR, POKEREVELATE, RESETPOKECATH, SELECCATH,
    POKERANDOMS, STATECATCH, POKERANDOMSRESET, SCORE, LIFES, POKERESET, SELECTLETTER,
    NICK, SENDNICK, RANKING
} from "./Actions";

const initialState = {

    start: 1,
    pokeNumber: [],
    error: [],
    pokeCatch: {},
    pokeRevelate: false,
    selecCath: 1,
    pokeRandoms: [ null, null, null ],
    stateCatch: null,
    score: { score: 0, success: 0, fail: 0, catch: 0 },
    lifes: [null, null, null],
    letterSelect: 26,
    nick: "",
    sendNick: false,
    ranking: []
};

export default function rootReducer(state = initialState, action) {

    switch (action.type){
        
        case START:

            return {
                ...state,
                start: action.payload
            }

        case POKERANDOMSRESET:

            return {
                ...state,
                pokeRandoms: [ null, null, null ]
            }

        case POKEPUSH:

            return {
                ...state,
                pokeNumber: state.pokeNumber.concat([action.payload])
            }
            
        case ERROR:

            return {
                ...state,
                error: action.payload
            }

        case POKECATCH:

            return {
                ...state,
                pokeCatch: action.payload
            }

        case POKEREVELATE:

            return {
                ...state,
                pokeRevelate: action.payload
            }

        case RESETPOKECATH:

            return {
                ...state,
                pokeCatch: {}
            }

        case SELECCATH:

            let select;

            if(action.payload === "up"){

                if(state.selecCath === 3){ select = 1;}

                else select = state.selecCath + 1;
            }
            if(action.payload === "down"){

                if(state.selecCath === 1){ select = 3;}

                else select = state.selecCath - 1;
            }

            return {
                ...state,
                selecCath: select
            }

        case POKERANDOMS:

            return {
                ...state,
                pokeRandoms: action.payload
            }

        case STATECATCH:

            return {
                ...state,
                stateCatch: action.payload
            }

        case SCORE:
             
            return {
                ...state,
                score: {
                    score: state.score.score + action.payload.score,
                    success: state.score.success + action.payload.success,
                    fail: state.score.fail + action.payload.fail,
                    catch: state.score.catch + action.payload.catch,
                }
            }

        case LIFES:

            if(action.payload === false && state.lifes.length > 0){

                let newLife = state.lifes;

                newLife.length = newLife.length - 1

                return {
                    ...state,
                    lifes: newLife
                }
            }
            else return {
                ...state,
                start: 3
            }

        case POKERESET:
             
            return {
                start: 1,
                pokeNumber: [],
                error: [],
                pokeCatch: {},
                pokeRevelate: false,
                selecCath: 1,
                pokeRandoms: [ null, null, null ],
                stateCatch: null,
                score: { score: 0, success: 0, fail: 0, catch: 0 },
                lifes: [null, null, null],
                letterSelect: 26,
                nick: "",
                sendNick: false,
                ranking: []
            }

        case SELECTLETTER:

            let NewLetter;

            if( action.payload && state.letterSelect === 27 ){ NewLetter = 0}
            if( action.payload && state.letterSelect < 27 ){ NewLetter = state.letterSelect + 1}
            if( !action.payload && state.letterSelect === 0 ){ NewLetter = 27}
            if( !action.payload && state.letterSelect > 0 ){ NewLetter = state.letterSelect - 1}
     
            return {
                ...state,
                letterSelect: NewLetter,
            } 
            
        case NICK:

            let Alfabeto = [
               "A","B","C","D","E","F","G","H","I","J","K","L","M",
               "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
            ];

            let newNick = state.nick;

            if(action.payload !== 26 && action.payload !== 27 && state.nick.length < 5 ){
                newNick = state.nick + Alfabeto[action.payload];
            }
            if(action.payload === 26 && state.nick !== "" ){
                newNick = state.nick.substring(0, state.nick.length - 1);
            }

            if(action.payload === 27 && state.nick.length > 2 ){

                return {
                    ...state,
                    sendNick: true
                }
            }

            return {
                ...state,
                nick: newNick
            }

        case SENDNICK:

            return {
                ...state,
                sendNick: action.payload
            }

        case RANKING:

            return {
                ...state,
                ranking: action.payload
            }

        default:

            return {
                ...state
            }
    }
}
