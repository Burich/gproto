import actionFactory from './actionFactory';

export const FETCH_TYPES_OF_JOBS_SUCCESS = 'FETCH_TYPES_OF_JOBS_SUCCESS';
export const typesOfJobsLoaded = actionFactory(FETCH_TYPES_OF_JOBS_SUCCESS);

export const FETCH_TYPES_OF_JOBS_REQUEST = 'FETCH_TYPES_OF_JOBS_REQUEST';
export const typesOfJobsRequested = actionFactory(FETCH_TYPES_OF_JOBS_REQUEST);

export const FETCH_TYPES_OF_JOBS_FAILURE = 'FETCH_TYPES_OF_JOBS_FAILURE';
export const typesOfJobsError = actionFactory(FETCH_TYPES_OF_JOBS_FAILURE);

export const fetchTypesOfJobs = (gpApiService, dispatch) => () => {
    dispatch(typesOfJobsRequested());
    
    gpApiService.getTypesOfJobs()
    .then(data => dispatch(typesOfJobsLoaded(data)))
    .catch(err => dispatch(typesOfJobsError(err)));
}