import { FETCH_STRUCTURAL_ELEMENTS_FAILURE, FETCH_STRUCTURAL_ELEMENTS_REQUEST,
    FETCH_STRUCTURAL_ELEMENTS_SUCCESS } from "../actions/structural-elements";

const updateStructuralElementsList = (state, action) => {
    if (state === undefined) {
        return {
            values: [],
            loading: false,
            error: null    
        }
    }

    switch (action.type) {
        case FETCH_STRUCTURAL_ELEMENTS_SUCCESS:
            return {
                values: action.payload,
                loading: false,
                error: null
            };
        case FETCH_STRUCTURAL_ELEMENTS_REQUEST:
            return {
                values: [],
                loading: true,
                error: null
            }
        case FETCH_STRUCTURAL_ELEMENTS_FAILURE:
            return {
                values: [],
                loading: false,
                error: action.payload
            }
        default:
            return state.structuralElements;
    }
}

export default updateStructuralElementsList;