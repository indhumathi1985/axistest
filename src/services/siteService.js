import http from './httpService';
import { apiUrl } from '../config.json'

const apiEndpoint = `${apiUrl}/sites`;

export async function login(username) {
    return await http.get(getUrl(username));
}

function getUrl(username) {
    return `${apiEndpoint}/?username=${username}`;
}