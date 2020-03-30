import actionFactory from './actionFactory';

export const FETCH_DESIGN_BRANDS_SUCCESS = 'FETCH_DESIGN_BRANDS_SUCCESS';
export const designBrandsLoaded = actionFactory(FETCH_DESIGN_BRANDS_SUCCESS);

export const FETCH_DESIGN_BRANDS_REQUEST = 'FETCH_DESIGN_BRANDS_REQUEST';
export const designBrandsRequested = actionFactory(FETCH_DESIGN_BRANDS_REQUEST);

export const FETCH_DESIGN_BRANDS_FAILURE = 'FETCH_DESIGN_BRANDS_FAILURE';
export const designBrandsError = actionFactory(FETCH_DESIGN_BRANDS_FAILURE);

export const fetchDesignBrands = (gpApiService, dispatch) => () => {
    dispatch(designBrandsRequested());
    
    gpApiService.getDesignBrands()
    .then(data => dispatch(designBrandsLoaded(data)))
    .catch(err => dispatch(designBrandsError(err)));
}