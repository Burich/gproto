import actionFactory from './actionFactory';

export const FETCH_STRUCTURAL_ELEMENTS_SUCCESS = 'FETCH_STRUCTURAL_ELEMENTS_SUCCESS';
export const structuralElementsLoaded = actionFactory(FETCH_STRUCTURAL_ELEMENTS_SUCCESS);

export const FETCH_STRUCTURAL_ELEMENTS_REQUEST = 'FETCH_STRUCTURAL_ELEMENTS_REQUEST';
export const structuralElementsRequested = actionFactory(FETCH_STRUCTURAL_ELEMENTS_REQUEST);

export const FETCH_STRUCTURAL_ELEMENTS_FAILURE = 'FETCH_STRUCTURAL_ELEMENTS_FAILURE';
export const structuralElementsError = actionFactory(FETCH_STRUCTURAL_ELEMENTS_FAILURE);

export const fetchStructuralElements = (gpApiService, dispatch) => () => {
    dispatch(structuralElementsRequested());
    
    gpApiService.getStructuralElements()
    .then(data => dispatch(structuralElementsLoaded(data)))
    .catch(err => dispatch(structuralElementsError(err)));
}