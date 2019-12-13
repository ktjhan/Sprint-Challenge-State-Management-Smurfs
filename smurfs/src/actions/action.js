import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const GET_SMURF_FAIL = "GET_SMURF_FAIL";

export const POST_SMURF = "POST_SMURF";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAIL = "POST_SMURF_FAIL";

export const getSmurfs = () => dispatch => {
    dispatch({type: GET_SMURFS});
    axios
      .get("http://localhost:3333/smurfs")
    .then(res => {
        console.log(res.data);
        dispatch({
            type: GET_SMURF_SUCCESS,
            payload: res.data
        });
    })
    .catch(res => {
        console.log(res)
        dispatch({
            type: GET_SMURF_FAIL,
            payload: res.response
        })
    })
};

export const postSmurf = newSmurf => dispatch => {
    dispatch({type: POST_SMURF});
    axios
        .post("http://localhost:3333/smurfs", newSmurf)
        .then(res => {
            console.log("posted",res);
            dispatch({
                type: POST_SMURF_SUCCESS,
                payload: res.data
            });
        })
        .catch(res => {
            console.log("failed", res)
            console.log(newSmurf)
            dispatch({
                type: POST_SMURF_FAIL,
                payload: res.data
            })
        })
}
