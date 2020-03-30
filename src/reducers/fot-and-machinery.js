import { FETCH_FOT_AND_MACHINERY_SUCCESS, FETCH_FOT_AND_MACHINERY_REQUEST,
    FETCH_FOT_AND_MACHINERY_FAILURE } from "../actions/fot-and-machinery";

const updateFotAndMachineryValue = (state, action) => {
    if (state === undefined) {
        return  {
            value: {},
            loading: false,
            error: null
        }
    }

    switch (action.type) {
        case FETCH_FOT_AND_MACHINERY_SUCCESS:
            return {
                value: action.payload,
                loading: false,
                error: null
            };
        case FETCH_FOT_AND_MACHINERY_REQUEST:
            return {
                value: {},
                loading: true,
                error: null
            }
        case FETCH_FOT_AND_MACHINERY_FAILURE:
            return {
                value: {},
                loading: false,
                error: action.payload
            }
        default:
            return state.fotAndMachinery;
    }
}

export default updateFotAndMachineryValue;