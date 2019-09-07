import http from './httpService';
import { apiUrl } from '../config.json'

const apiEndpoint = `${apiUrl}`;

const DeviceService = {
    getSites: async(id) => {
        return await http.get(getUrl("sites",id));
    },

    getDevices: async(id) => {
        return await http.get(getUrl("devices",id));
    },

    getDeviceById: async(id) => {
        return await http.get(`${apiEndpoint}/devices/?id=${id}`);
    },

}

function getUrl(type, id){
    if(type === 'sites') {
        id  = `id=${id}`;
    } else {
        id = `site_id=${id}`;
    }
    return (`${apiEndpoint}/${type}/?${id}`);
}

export default DeviceService;

