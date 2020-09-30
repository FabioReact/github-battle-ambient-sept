import * as actionTypes from '../actions/actionTypes'

const initialState = {
	citiesToVisit: ["paris"],
	user: {
		connected: false,
		userToken: "",
	}
}

const citiesReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_CITY:
			return {
				...state,
				citiesToVisit: [...state.citiesToVisit, action.payload],
			}
		case actionTypes.REMOVE_CITY:
			return {
				...state,
				citiesToVisit: state.citiesToVisit.filter(c => c !== action.payload),
			}
		default:
			return state
	}
}

export default citiesReducer