import { FETCH_REFERENCES_AND_RATES_FAILURE, FETCH_REFERENCES_AND_RATES_REQUEST,
    FETCH_REFERENCES_AND_RATES_SUCCESS, SET_REFERENCES_AND_RATES_CURRENT,
    FETCH_FOT_AND_MACHINERY_SUCCESS, FETCH_FOT_AND_MACHINERY_REQUEST,
    FETCH_FOT_AND_MACHINERY_FAILURE } from "../actions/references-and-rates";

const updateFotAndMachinesValue = (state, action) => {
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
            return state.referencesAndRates.fotAndMachines;
    }
}

const updateReferencesAndRatesList = (state, action) => {
    if (state === undefined) {
        return {
            values: [],
            loading: false,
            error: null,

            current: null,
            fotAndMachines: updateFotAndMachinesValue(state, action)
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
                error: null,
                current: null,
                fotAndMachines: updateFotAndMachinesValue(undefined, action)
            }
        case FETCH_REFERENCES_AND_RATES_FAILURE:
            return {
                ...state.referencesAndRates,
                values: [],
                loading: false,
                error: action.payload
            }
        case SET_REFERENCES_AND_RATES_CURRENT:
            return {
                ...state.referencesAndRates,
                current: action.payload
            }
        default:
            return {
                ...state.referencesAndRates,
                fotAndMachines: updateFotAndMachinesValue(state, action)
            };
    }
}

export default updateReferencesAndRatesList;