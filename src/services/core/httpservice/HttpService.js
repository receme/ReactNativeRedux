import { Alert } from "react-native";

class HttpService {

    getContent(url, onSuccess, onFailure) {

        return fetch(url)
            .then((res) => res.json())
            .then((data) => data)
            .catch((err) => err);
    }
}

const httpService = new HttpService();

export default httpService;