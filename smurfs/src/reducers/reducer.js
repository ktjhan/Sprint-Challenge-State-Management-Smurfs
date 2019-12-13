import {GET_SMURFS, GET_SMURF_SUCCESS, GET_SMURF_FAIL, POST_SMURF, POST_SMURF_SUCCESS, POST_SMURF_FAIL} from "../actions/action";

const initialState = {
    smurfs:[],
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURFS:
            return {
                ...state,
                isFetching: true,
                error:""
            };
        case GET_SMURF_SUCCESS:
            return {
                smurfs: action.payload,
                isFetching:false,
                error:""
            };
        case GET_SMURF_FAIL:
            return {
                ...state,
                isFetching:false,
                error: action.payload
            };
        case POST_SMURF:
            return {
                ...state,
                isFetching:true,
                error:""
            };
        case POST_SMURF_SUCCESS:
            return {
                isFetching:false,
                smurfs:action.payload,
                error: ""
            };
        case POST_SMURF_FAIL:
            return {
                ...state,
                isFetching:false,
                error: action.payload
            };
            default:
                return state;

    }

};
