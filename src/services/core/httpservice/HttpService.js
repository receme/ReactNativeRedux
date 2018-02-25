class HttpService {

    getContent(url) {

        return fetch(url)
            .then((res) => res.json())
            .then((data) => data)
            .catch((err) => err);
    }
}

const httpService = new HttpService();

export default httpService;