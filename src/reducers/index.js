import updateMeasureUnitsList from './measure-units'
import updateDesignBrandsList from './design-brands';
import updateStructuralElementsList from './structural-elements';
import updateTypesOfJobsList from './types-of-jobs';
import updateReferencesAndRatesList from './references-and-rates';

const reducer = (state, action) => {
    console.log('action: ', action.type); //JUSTTEST:

    return {
        measureUnits: updateMeasureUnitsList(state, action),
        designBrands: updateDesignBrandsList(state, action),
        structuralElements: updateStructuralElementsList(state, action),
        typesOfJobs: updateTypesOfJobsList(state, action),
        referencesAndRates: updateReferencesAndRatesList(state, action),
    }
};

export default reducer;