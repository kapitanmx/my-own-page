import {
    API_URL,
    API_KEY,
    DATA_ENDPOINT
} from './Config';

const defaultConfig = {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    }
};

const getData = {
    method: 'GET',
    headers: {
        'Content-Type' : 'application/json'
    }
};

const apiSettings = {}