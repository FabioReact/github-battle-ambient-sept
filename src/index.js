import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunkMiddleware from 'redux-thunk'
import citiesReducer from "./store/reducers/citiesReducer"
import popularReducer from "./store/reducers/popularReducer"

// Création de mon reducer
const reducer = combineReducers({
	cities: citiesReducer,
	popular: popularReducer,
	// user: userReducer,
})

// Création du middleware et de son application
const withMiddleware = applyMiddleware(thunkMiddleware)

// Utile pour l'activation des Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Création de mon store
const store = createStore(reducer, undefined, composeEnhancers(withMiddleware))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
)
