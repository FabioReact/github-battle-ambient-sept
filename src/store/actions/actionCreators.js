import { fetchPopularRepos } from "../../utils/api"
import * as actionTypes from "./actionTypes"

export const addCity = city => ({
	type: actionTypes.ADD_CITY,
	payload: city,
})

export const asyncAddCity = city => {
	console.log("Début Traitement asynchrone")
	return dispatch => {
		setTimeout(() => {
			console.log("Fin Traitement asynchrone")
			dispatch({
				type: actionTypes.ADD_CITY,
				payload: city,
			})
		}, 1000)
	}
}

export const removeCity = city => ({
	type: actionTypes.REMOVE_CITY,
	payload: city,
})

export const storeRepos = repos => {
	return {
		type: actionTypes.STORE_REPOS,
		payload: {
			repos,
		}
	}
}

const noRefetchNeeded = () => {
	return {
		type: actionTypes.NO_REFETCH_NEEDED
	}
}

export const updateLanguage = lang => {
	return {
		type: actionTypes.UPDATE_LANGUAGE,
		payload: {
			language: lang
		}
	}
}

export const fetchRepos = (language) => {
	return async (dispatch, getState) => {
		const state = getState()
		if (state.popular.firstFetch) {
			const res = await fetchPopularRepos()
			dispatch(storeRepos(res))
		}
		dispatch(noRefetchNeeded())
	}
}
