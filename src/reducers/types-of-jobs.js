const updateTypesOfJobsList = (state, action) => {
    if (state === undefined) {
        return {
            values: [],
            loading: false,
            error: null    
        }
    }

    switch (action.type) {
        case 'FETCH_TYPES_OF_JOBS_SUCCESS':
            return {
                values: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_TYPES_OF_JOBS_REQUEST':
            return {
                values: [],
                loading: true,
                error: null
            }
        case 'FETCH_TYPES_OF_JOBS_FAILURE':
            return {
                values: [],
                loading: false,
                error: action.payload
            }
        default:
            return state.typesOfJobs;
    }
}

export default updateTypesOfJobsList;