import axios from "axios";

const BASE_URL = "http://localhost:5000";

function signup(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body);
    return promise;
}

export { signup };
