import actionFactory from './actionFactory';

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