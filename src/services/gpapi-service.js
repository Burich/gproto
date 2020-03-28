import FetchService from "./fetch-service";

export default class GpApiService extends FetchService {

    getTypesOfJobs = () => {
        return this.getResource('types-of-jobs');
    }

    getMeasureUnits = () => {
        return this.getResource('measure-units');
    }

    getDesignBrands = () => {
        return this.getResource('design-brands');
    }

    getStructuralElements = () => {
        return this.getResource('structural-elements');
    }
}