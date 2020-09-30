import React, { lazy, Suspense } from 'react'
import {Switch, Route} from "react-router-dom"
import Counter from './pages/Counter'
import WithLoading from './hoc/WithLoading'
import Cities from './pages/Cities'
// import Popular from './pages/Popular'

const PopularLazy = lazy(() => import('./pages/Popular'))
// withLoading(Popular)

const Routes = () => {
	return (
		<Switch>
			<Suspense fallback={<div>Loading with Suspense...</div>}>
				<Route path="/counter" component={WithLoading(Counter)} />
				<Route path="/cities" component={Cities} />
				<Route path="/" exact>
					<PopularLazy />
				</Route>
			</Suspense>
		</Switch>
	)
}

export default Routes
