import * as types from './types';
import Api from '../lib/api';

export function fetchRecipes(ingredients) {
    console.log(ingredients)
    return (dispatch, getState) => {
        const params = [
            `ingredients=${encodeURIComponent(ingredients)}`,
            'fillIngredients=false',
            'limitLicense=false',
            'number=20',
            'ranking=1'
        ].join('&')
        return Api.get(`/recipes/findByIngredients?${params}`).then(resp => {
            console.log(resp)
            dispatch(setSearchedRecipes({ recipes: resp }));
        }).catch((ex) => {
            console.log(ex);
        });
    }
}

export function addRecipe() {
    return {
        type: types.ADD_RECIPE,
    }
}