import axios from "axios";

const BASE_URL = "https://my-wallet-sp.herokuapp.com";

function createConfig(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
}

function signup(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body);
    return promise;
}

function login(body) {
    const promise = axios.post(`${BASE_URL}/login`, body);
    return promise;
}

function getHomeData(token, userId) {
    const config = createConfig(token);
    const promise = axios.get(`${BASE_URL}/home/${userId}`, config);
    return promise;
}

function postDeposit(body, token) {
    const config = createConfig(token);
    const promise = axios.post(`${BASE_URL}/deposit`, body, config);
    return promise;
}

function postWithdraw(body, token) {
    const config = createConfig(token);
    const promise = axios.post(`${BASE_URL}/withdraw`, body, config);
    return promise;
}

export { signup, login, getHomeData, postDeposit, postWithdraw };
