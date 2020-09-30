import React, { useState, useEffect, memo, useCallback } from "react"

const DummyMessage = ({ message }) => {
	console.log("Render de DummyMessage")
	return <p>{message}</p>
}

const MemoizedDummyMessage = memo(DummyMessage)

const Button = ({ label, onClick }) => {
	console.log("Render de Button")
	return <button onClick={onClick}>{label}</button>
}

const MemoizedButton = memo(Button)

const Counter = (props) => {

	useEffect(() => {
		props.setLoading(false)
	}, [props])

	const fn = useCallback(() => {
		console.log("what the hell?!")
	}, [])
	// const fn = () => console.log("what the hell?!")
	const [counter, setcounter] = useState(0)
	const increment = useCallback(() => {
		setcounter(c => c + 1)
	}, [])
	const decrement = useCallback(() => {
		setcounter(c => c - 1)
	}, [])
	return (
		<div>
			<p>Compteur: {counter}</p>
			<MemoizedButton label='+1' onClick={increment} />
			<MemoizedButton label='-1' onClick={decrement} />
			{/* <button onClick={() => setcounter(c => c + 1)}>+1</button>
			<button onClick={() => setcounter(c => c - 1)}>-1</button> */}
			<MemoizedDummyMessage message='Test de memo' fn={fn} />
		</div>
	)
}

export default Counter
