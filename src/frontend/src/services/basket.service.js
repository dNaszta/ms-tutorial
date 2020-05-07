import { authHeader } from '../helpers/index';
import { logout } from '../services/index'

export const basketService = {
    addToBasket,
    getBasket
};

function addToBasket(productId, requestId) {
    const authHead = authHeader();

    const requestOptions = {
        method: 'PATCH',
        headers: authHead
    };

    return fetch(`http://localhost:3000/basket/add/${productId}/request/${requestId}`, requestOptions)
        .then(handleResponse);
}

function getBasket() {
    const authHead = authHeader();

    const requestOptions = {
        method: 'GET',
        headers: authHead
    };
    return fetch(`http://localhost:3000/basket`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}