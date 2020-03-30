import { FETCH_REFERENCES_AND_RATES_FAILURE, FETCH_REFERENCES_AND_RATES_REQUEST,
    FETCH_REFERENCES_AND_RATES_SUCCESS } from "../actions/references-and-rates";

const updateReferencesAndRatesList = (state, action) => {
    if (state === undefined) {
        return {
            values: [],
            loading: false,
            error: null
        }
    }

    switch (action.type) {
        case FETCH_REFERENCES_AND_RATES_SUCCESS:
            return {
                ...state.referencesAndRates,
                values: action.payload,
                loading: false,
                error: null
            };
        case FETCH_REFERENCES_AND_RATES_REQUEST:
            return {
                values: [],
                loading: true,
                error: null
            }
        case FETCH_REFERENCES_AND_RATES_FAILURE:
            return {
                ...state.referencesAndRates,
                values: [],
                loading: false,
                error: action.payload
            }
        default:
            return state.referencesAndRates;
    }
}

export default updateReferencesAndRatesList;