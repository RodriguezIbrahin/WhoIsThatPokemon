import axios from "axios";
import { Api } from "../Api";

export const START = "START";
export const POKEPUSH = "POKEPUSH";
export const POKECATCH = "POKECATCH";
export const ERROR = "ERROR";
export const POKEREVELATE = "POKEREVELATE";
export const RESETPOKECATH = "RESETPOKECATH";
export const SELECCATH = "SELECCATH";
export const POKERANDOMS = "POKERANDOMS";
export const STATECATCH = "STATECATCH";
export const POKERANDOMSRESET = "POKERANDOMSRESET";
export const SCORE = "SCORE";
export const LIFES = "LIFES";
export const POKERESET = "POKERESET";
export const SELECTLETTER = "SELECTLETTER";
export const NICK = "NICK";
export const SENDNICK = "SENDNICK";
export const RANKING = "RANKING";
export const POSTRANKING = "POSTRANKING"


export function Start(payload) {

    return{
        type: START,
        payload,
    }
};

export function PokePush(payload) {

    return{
        type: POKEPUSH,
        payload,
    }
};


export function PokeCatch(payload) {

    return async function (dispatch) {
        
        try {

            const pokeCatch = await axios.get(`https://pokeapi.co/api/v2/pokemon/${payload}`);

            const CatchPokeRandoms = () =>{

                let poke1 = Math.round(Math.random() * (152 - 1) + 1);
                let poke2 = Math.round(Math.random() * (152 - 1) + 1);
        
                if( poke1 !== poke2 && poke1 !== payload && poke2 !== payload){
                    return [poke1, poke2];
                }
                else return CatchPokeRandoms();
            };

            const PokeRandoms = CatchPokeRandoms();
            
            const PokeRandom1 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${PokeRandoms[0]}`);

            const PokeRandom2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${PokeRandoms[1]}`);

            let arrPokes = [ PokeRandom2.data.species.name, pokeCatch.data.species.name , PokeRandom1.data.species.name];

            const PokeShuffle = (shuffle) =>{

                shuffle.map( shuffles =>{ 
        
                    let poker = Math.round(Math.random() * 3);
        
                    let temporal = shuffle[poker];
        
                    shuffle[poker] = shuffle[2];

                    shuffle[2] = temporal;
                })

                return shuffle.filter( poke => poke );
            }

            PokeShuffle(arrPokes);

            let poke = PokeShuffle(arrPokes);

            dispatch({ type: POKERANDOMS, payload: poke });

            dispatch({ type: POKECATCH, payload: { name: pokeCatch.data.species.name, img: pokeCatch.data.sprites.front_default }});
            
            dispatch({ type: START, payload: 2 });
        }
        catch(err){ dispatch({ type: ERROR, payload: [ "POKECATCH", err ]});};
    }
};

export function PokeRevelate(payload) {

    return{
        type: POKEREVELATE,
        payload,
    }
};

export function ResetPokeCath() {

    return{
        type: RESETPOKECATH,
    }
};

export function SelectCatch(payload) {

    return{
        type: SELECCATH,
        payload,
    }
};

export function StateCatch(payload) {

    return{
        type: STATECATCH,
        payload,
    }
};

export function PokeRandomsReset() {

    return{
        type: POKERANDOMSRESET,
    }
};

export function Score(payload) {

    return{
        type: SCORE,
        payload,
    }
};

export function Lifes(payload) {

    return{
        type: LIFES,
        payload,
    }
};

export function PokeReset() {

    return{
        type: POKERESET,
    }
};

export function SelectLetter(payload) {

    return{
        type: SELECTLETTER,
        payload,
    }
};

export function Nick(payload) {

    return{
        type: NICK,
        payload,
    }
};

export function SendNick(payload) {

    return{
        type: SENDNICK,
        payload,
    }
};


export function GetRanking() {

    return async function (dispatch) {
        
        try {

            const Ranking = await axios.get(`${Api}score`);

            dispatch({ type: RANKING, payload: Ranking.data.rows });

        }
        catch(err){ dispatch({ type: ERROR, payload: [ "POKECATCH", err ]});};
    }
};

export function PostRanking(payload) {

    return async function (dispatch) {
        
        try {

            const Ranking = await axios.post(`${Api}score`, payload);

            dispatch({ type: POSTRANKING });

        }
        catch(err){ dispatch({ type: ERROR, payload: [ "POKECATCH", err ]});};
    }
};

