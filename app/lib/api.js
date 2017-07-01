import Settings from '../../settings.json';

class Api {

    static get(route) {
        return this.xhr(route, null, 'GET');
    }

    static put(route, params) {
        return this.xhr(route, params, 'PUT');
    }

    static post(route, params) {
        return this.xhr(route, params, 'POST');
    }

    static delete(route, params) {
        return this.xhr(route, params, 'DELETE');
    }

    static xhr(route, params, verb) {

        const host = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com';
        const url = `${host}${route}`

        const options = {
            method: verb,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'dataType': 'json',
                'X-Requested-With': 'XMLHttpRequest',
                'X-Mashape-Key': Settings.mashapeKey
            },
        }

        return fetch(url, options)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson)
                    return responseJson;
                })
                .catch((error) => {
                    console.error(error);
                });
    }
}

export default Api;