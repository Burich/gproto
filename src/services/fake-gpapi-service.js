import FetchService from "./fetch-service";

export default class FakeGpApiService extends FetchService {

    replyWithDelay = (data, delay = 700) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data)
            }, delay);
        })
    }

    getMeasureUnits = () => {
        const data = [
            {"id": 1, "unit": "100 м3", "base": "м3", "factor": 0.01},
            {"id": 2, "unit": "штук", "base": "шт", "factor": 1}
        ];
        return this.replyWithDelay(data);
    }
}