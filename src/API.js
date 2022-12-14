import {
    API_URL,
    API_KEY,
    DATA_ENDPOINT
} from './Config';

const defaultConfig = {
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Content-Type' : 'application/json'
    }
};

const apiSettings = {
    fetchFormData: async (name, email, message) => {
        const endpoint = `${API_URL}/${DATA_ENDPOINT}?name=${name}&email=${email}&message=${message}`;
        const bodyData = {
            name,
            email,
            message,
        };
        return await (
            await fetch(endpoint, {
                ...defaultConfig,
                body: JSON.stringify(bodyData)
            })
        ).json();
    },
}

export default apiSettings;