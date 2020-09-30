import React, { useState } from 'react'

const Comp = (props, Component) => {
	const [loading, setLoading] = useState(true)
	const setLoadingHook = v => setLoading(v)
	return (
		<>
			{loading && <div>Loading...</div>}
			<Component {...props} setLoading={setLoadingHook} />
		</>
	)
}

const WithLoading = (Component) => {
	return (props) => Comp(props, Component)
}

// const WithLoading = Component => props => {
// 	const [loading, setLoading] = useState(true)
// 	return (
// 		<>
// 			{loading ? <div>Loading...</div> : <Component {...props} setLoading={v => setLoading(v)} />}
// 		</>
// 	)
// }

export default WithLoading
