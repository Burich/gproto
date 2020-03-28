const typesOfJobsLoaded = (sections) => {
    return {
        type: 'FETCH_TYPES_OF_JOBS_SUCCESS',
        payload: sections
    }
};

const typesOfJobsRequested = () => {
    return {
        type: 'FETCH_TYPES_OF_JOBS_REQUEST'
    }
};

const typesOfJobsError = (error) => {
    return {
        type: 'FETCH_TYPES_OF_JOBS_FAILURE',
        payload: error
    }
}

const fetchTypesOfJobs = (gpApiService, dispatch) => () => {
    dispatch(typesOfJobsRequested());
    
    gpApiService.getTypesOfJobs()
    .then(data => dispatch(typesOfJobsLoaded(data)))
    .catch(err => dispatch(typesOfJobsError(err)));
}

export {
    typesOfJobsRequested,
    typesOfJobsLoaded,
    typesOfJobsError,

    fetchTypesOfJobs
}