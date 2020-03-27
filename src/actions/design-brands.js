const designBrandsLoaded = (brands) => {
    return {
        type: 'FETCH_DESIGN_BRANDS_SUCCESS',
        payload: brands
    }
};

const designBrandsRequested = () => {
    return {
        type: 'FETCH_DESIGN_BRANDS_REQUEST'
    }
};

const designBrandsError = (error) => {
    return {
        type: 'FETCH_DESIGN_BRANDS_FAILURE',
        payload: error
    }
}

const fetchDesignBrands = (gpApiService, dispatch) => () => {
    dispatch(designBrandsRequested());
    
    gpApiService.getDesignBrands()
    .then(data => dispatch(designBrandsLoaded(data)))
    .catch(err => dispatch(designBrandsError(err)));
}

export {
    designBrandsRequested,
    designBrandsLoaded,
    designBrandsError,

    fetchDesignBrands
}