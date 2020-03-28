import updateMeasureUnitsList from './measure-units'
import updateDesignBrandsList from './design-brands';
import updateStructuralElementsList from './structural-elements';
import updateTypesOfJobsList from './types-of-jobs';

const reducer = (state, action) => {
    console.log('action: ', action.type); //JUSTTEST:

    return {
        measureUnits: updateMeasureUnitsList(state, action),
        designBrands: updateDesignBrandsList(state, action),
        structuralElements: updateStructuralElementsList(state, action),
        typesOfJobs: updateTypesOfJobsList(state, action),
    }
};

export default reducer;