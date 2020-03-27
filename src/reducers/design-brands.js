const updateDesignBrandsList = (state, action) => {
    if (state === undefined) {
        return {
            values: [],
            loading: false,
            error: null    
        }
    }

    switch (action.type) {
        case 'FETCH_DESIGN_BRANDS_SUCCESS':
            return {
                values: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_DESIGN_BRANDS_REQUEST':
            return {
                values: [],
                loading: true,
                error: null
            }
        case 'FETCH_DESIGN_BRANDS_FAILURE':
            return {
                values: [],
                loading: false,
                error: action.payload
            }
        default:
            return state.designBrands;
    }
}

export default updateDesignBrandsList;