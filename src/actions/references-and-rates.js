import actionFactory from './actionFactory';

export const FETCH_REFERENCES_AND_RATES_SUCCESS = 'FETCH_REFERENCES_AND_RATES_SUCCESS';
export const referencesAndRatesLoaded = actionFactory(FETCH_REFERENCES_AND_RATES_SUCCESS);

export const FETCH_REFERENCES_AND_RATES_REQUEST = 'FETCH_REFERENCES_AND_RATES_REQUEST';
export const referencesAndRatesRequested = actionFactory(FETCH_REFERENCES_AND_RATES_REQUEST);

export const FETCH_REFERENCES_AND_RATES_FAILURE = 'FETCH_REFERENCES_AND_RATES_FAILURE';
export const referencesAndRatesError = actionFactory(FETCH_REFERENCES_AND_RATES_FAILURE);

export const SET_REFERENCES_AND_RATES_CURRENT = 'SET_REFERENCES_AND_RATES_CURRENT';
export const referencesAndRatesSetCurrent = actionFactory(SET_REFERENCES_AND_RATES_CURRENT);

export const fetchReferencesAndRates = (gpApiService, dispatch) => () => {
    dispatch(referencesAndRatesRequested());
    
    gpApiService.getReferencesAndRates()
    .then(data => dispatch(referencesAndRatesLoaded(data)))
    .catch(err => dispatch(referencesAndRatesError(err)));
}

export const FETCH_FOT_AND_MACHINERY_SUCCESS = 'FETCH_FOT_AND_MACHINERY_SUCCESS';
export const fotAndMachineryLoaded = actionFactory(FETCH_FOT_AND_MACHINERY_SUCCESS);

export const FETCH_FOT_AND_MACHINERY_REQUEST = 'FETCH_FOT_AND_MACHINERY_REQUEST';
export const fotAndMachineryRequested = actionFactory(FETCH_FOT_AND_MACHINERY_REQUEST);

export const FETCH_FOT_AND_MACHINERY_FAILURE = 'FETCH_FOT_AND_MACHINERY_FAILURE';
export const fotAndMachineryError = actionFactory(FETCH_FOT_AND_MACHINERY_FAILURE);

export const fetchFotAndMachinery = (gpApiService, dispatch) => (id) => {
    dispatch(fotAndMachineryRequested());
    
    gpApiService.getFotAndMachineryFor(id)
    .then(data => dispatch(fotAndMachineryLoaded(data)))
    .catch(err => dispatch(fotAndMachineryError(err)));
}