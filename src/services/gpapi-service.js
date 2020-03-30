import FetchService from "./fetch-service";

export default class GpApiService extends FetchService {

    getTypesOfJobs = () => {
        return this.getResource('types-of-jobs');
    }

    getMeasureUnits = () => {
        return this.getResource('measure-units');
    }

    getReferencesAndRates = () => {
        return this.getResource('references-and-rates');
    }

    getFotAndMachineryFor = (id) => {
        return this.getResource(`fot-and-machinery/${id}`);
    }

    getDesignBrands = () => {
        return this.getResource('design-brands');
    }

    getStructuralElements = () => {
        return this.getResource('structural-elements');
    }
}