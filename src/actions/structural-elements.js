const structuralElementsLoaded = (elements) => {
    return {
        type: 'FETCH_STRUCTURAL_ELEMENTS_SUCCESS',
        payload: elements
    }
};

const structuralElementsRequested = () => {
    return {
        type: 'FETCH_STRUCTURAL_ELEMENTS_REQUEST'
    }
};

const structuralElementsError = (error) => {
    return {
        type: 'FETCH_STRUCTURAL_ELEMENTS_FAILURE',
        payload: error
    }
}

const fetchStructuralElements = (gpApiService, dispatch) => () => {
    dispatch(structuralElementsRequested());
    
    gpApiService.getStructuralElements()
    .then(data => dispatch(structuralElementsLoaded(data)))
    .catch(err => dispatch(structuralElementsError(err)));
}

export {
    structuralElementsRequested,
    structuralElementsLoaded,
    structuralElementsError,

    fetchStructuralElements
}