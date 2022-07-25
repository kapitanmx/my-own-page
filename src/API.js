import {
    API_URL,
    API_KEY,
    MAIL_ENDPOINT
} from './Config';

const defaultConfig = {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    }
};

const apiSettings = {
    putFormData: async (name, lastName, email, text) => {
        const body = {
            name,
            lastName,
            email,
            text
        };
        const data = await (
            await fetch(MAIL_ENDPOINT, {
                ...defaultConfig,
                body: JSON.stringify(body)
            })
        ).json();
    }
}