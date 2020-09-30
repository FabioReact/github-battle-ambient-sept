import React, { useState } from "react"
import { connect } from "react-redux"
import { addCity, asyncAddCity, removeCity } from "../store/actions/actionCreators"

const Cities = ({addCity, removeCity, cities}) => {
	const [inputCity, setInputCity] = useState("")
	const onChangeInputCity = e => {
		setInputCity(e.target.value)
	}

	const onSubmitCity = () => {
		addCity(inputCity)
		setInputCity("")
	}

	const onDeleteCity = city => {
		console.log(city)
		removeCity(city)
	}

	return (
		<>
			<h2>Liste des villes à visiter</h2>
			<div>
				<label htmlFor="city">Ajouter:</label>
				<input type="text" id="city" value={inputCity} onChange={onChangeInputCity}/>
				<button onClick={onSubmitCity}>Ajouter</button>
			</div>
			<article>
				<aside>
					<ul>
						{cities.map((c, i) => (
							<li key={i}>{c} - <span role="img" style={{cursor: "pointer"}} onClick={() => onDeleteCity(c)}>❌</span></li>
						))}
					</ul>
				</aside>
			</article>
		</>
	)
}

const mapStateToProps = state => {
	return {
		cities: state.cities.citiesToVisit,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addCity: city => dispatch(asyncAddCity(city)),
		removeCity: cityValue => dispatch(removeCity(cityValue)),
	}
}

// currying
export default connect(mapStateToProps, mapDispatchToProps)(Cities)
