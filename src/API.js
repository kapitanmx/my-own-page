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

const apiSettings = {
    fetchData: async () => {
        const endpoint = `${API_URL}/${DATA_ENDPOINT}`;
        return await (await fetch(endpoint)).json();
    },
    sendData: async (name, lastName, email, text) => {
        const bodyData = {
            name,
            lastName,
            email,
            text
        };
        const data = await (
            await fetch(DATA_ENDPOINT, {
                ...defaultConfig,
                body: JSON.stringify(bodyData)
            })
        ).json();
    }
}