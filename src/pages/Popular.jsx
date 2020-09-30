import React, { useEffect, useState } from 'react'
import SelectLanguage from '../components/SelectLanguage'
import { connect } from "react-redux"
import { fetchRepos, storeRepos, updateLanguage } from '../store/actions/actionCreators'

const Popular = ({repos, language, fetchRepos, updateLanguage}) => {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		// const fetchData = async () => {
		// 	const res = await fetchPopularRepos()
		// 	storeRepos(res)
		// 	setLoading(false)
		// }
		// fetchData()
		fetchRepos(language)
		setLoading(false)
	}, [language])

	return (
		<>
			<h1>
				Page Popular
			</h1>
			<SelectLanguage selected={language} onChange={updateLanguage} />
			{loading ? <div>Fetching Repos...</div> : <ul>
				{repos.map(repo => <li key={repo.id}>
					<img src={repo.owner.avatar_url} alt=""/>
					<p>{repo.name}</p>
				</li>)}
			</ul>}
		</>
	)
}

const mapStateToProps = state => {
	return {
		repos: state.popular.repos,
		language: state.popular.language,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchRepos: (language) => dispatch(fetchRepos(language)),
		updateLanguage: language => dispatch(updateLanguage(language))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Popular)
