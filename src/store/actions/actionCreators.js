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
	return async dispatch => {
		// const res = await fetchPopularRepos(lang)
		dispatch({
			type: actionTypes.UPDATE_LANGUAGE,
			payload: {
				language: lang,
				// repos: res
			}
		})
	}
}

export const fetchRepos = (language) => {
	return async (dispatch, getState) => {
		const state = getState()
		// console.log(state.popular.language, language)
		// console.log(state.popular.repos.length)
		if (state.popular.refetch) {
			const res = await fetchPopularRepos(language)
			dispatch(storeRepos(res))
		} else {
			dispatch(noRefetchNeeded())
		}
	}
}
