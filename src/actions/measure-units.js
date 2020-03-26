const measureUnitsLoaded = (units) => {
    return {
        type: 'FETCH_MEASURE_UNITS_SUCCESS',
        payload: units
    }
};

const measureUnitsRequested = () => {
    return {
        type: 'FETCH_MEASURE_UNITS_REQUEST'
    }
};

const measureUnitsError = (error) => {
    return {
        type: 'FETCH_MEASURE_UNITS_FAILURE',
        payload: error
    }
}

const fetchMeasureUnits = (gpApiService, dispatch) => () => {
    dispatch(measureUnitsRequested());
    
    gpApiService.getMeasureUnits()
    .then(data => dispatch(measureUnitsLoaded(data)))
    .catch(err => dispatch(measureUnitsError(err)));
}

export {
    measureUnitsRequested,
    measureUnitsLoaded,
    measureUnitsError,

    fetchMeasureUnits
}