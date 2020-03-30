import actionFactory from './actionFactory';

export const FETCH_MEASURE_UNITS_SUCCESS = 'FETCH_MEASURE_UNITS_SUCCESS';
export const measureUnitsLoaded = actionFactory(FETCH_MEASURE_UNITS_SUCCESS);

export const FETCH_MEASURE_UNITS_REQUEST = 'FETCH_MEASURE_UNITS_REQUEST';
export const measureUnitsRequested = actionFactory(FETCH_MEASURE_UNITS_REQUEST);

export const FETCH_MEASURE_UNITS_FAILURE = 'FETCH_MEASURE_UNITS_FAILURE';
export const measureUnitsError = actionFactory(FETCH_MEASURE_UNITS_FAILURE);

export const fetchMeasureUnits = (gpApiService, dispatch) => () => {
    dispatch(measureUnitsRequested());
    
    gpApiService.getMeasureUnits()
    .then(data => dispatch(measureUnitsLoaded(data)))
    .catch(err => dispatch(measureUnitsError(err)));
}