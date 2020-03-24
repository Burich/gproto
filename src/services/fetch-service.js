export default class FetchService {
    _apiUrl = 'http://localhost:3001/';

    async getResource(url) {    
        const result = await fetch(this._apiUrl + url);
    
        if (!result.ok) {
            throw new Error(`Could not fetch url ${url}`);
        }
    
        return result.json();
    }
}
