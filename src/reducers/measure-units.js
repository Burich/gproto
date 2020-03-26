const updateMeasureUnitsList = (state, action) => {
    if (state === undefined) {
        return {
            values: [],
            loading: false,
            error: null    
        }
    }

    switch (action.type) {
        case 'FETCH_MEASURE_UNITS_SUCCESS':
            return {
                values: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_MEASURE_UNITS_REQUEST':
            return {
                values: [],
                loading: true,
                error: null
            }
        case 'FETCH_MEASURE_UNITS_FAILURE':
            return {
                values: [],
                loading: false,
                error: action.payload
            }
        default:
            return state.measureUnits;
    }
}

export default updateMeasureUnitsList;