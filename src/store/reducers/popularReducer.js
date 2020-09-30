import * as actionTypes from "../actions/actionTypes"

const initialState = {
	repos: [],
	language: "All",
	refetch: true,
}

const popularReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.STORE_REPOS:
			return {
				...state,
				repos: action.payload.repos,
				refetch: false,
			}
		case actionTypes.NO_REFETCH_NEEDED:
			return state
		case actionTypes.UPDATE_LANGUAGE:
			return {
				...state,
				language: action.payload.language,
				refetch: true,
			}
		default:
			return state
	}
}

export default popularReducer