import actionFactory from './actionFactory';

export const FETCH_REFERENCES_AND_RATES_SUCCESS = 'FETCH_REFERENCES_AND_RATES_SUCCESS';
export const referencesAndRatesLoaded = actionFactory(FETCH_REFERENCES_AND_RATES_SUCCESS);

export const FETCH_REFERENCES_AND_RATES_REQUEST = 'FETCH_REFERENCES_AND_RATES_REQUEST';
export const referencesAndRatesRequested = actionFactory(FETCH_REFERENCES_AND_RATES_REQUEST);

export const FETCH_REFERENCES_AND_RATES_FAILURE = 'FETCH_REFERENCES_AND_RATES_FAILURE';
export const referencesAndRatesError = actionFactory(FETCH_REFERENCES_AND_RATES_FAILURE);

export const fetchReferencesAndRates = (gpApiService, dispatch) => () => {
    dispatch(referencesAndRatesRequested());
    
    gpApiService.getReferencesAndRates()
    .then(data => dispatch(referencesAndRatesLoaded(data)))
    .catch(err => dispatch(referencesAndRatesError(err)));
}