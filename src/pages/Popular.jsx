import React, { useEffect, useState } from 'react'
import SelectLanguage from '../components/SelectLanguage'
import { connect } from "react-redux"
import { fetchRepos, updateLanguage } from '../store/actions/actionCreators'

const Popular = ({repos, language, fetchRepos, updateLanguage}) => {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (!loading) setLoading(true)
		const fetchData = async () => {
			await fetchRepos(language)
			setLoading(false)
		}
		fetchData()
		// eslint-disable-next-line
	}, [language, fetchRepos])

	return (
		<>
			<h1>
				Page Popular
			</h1>
			<p>Selected: {language} </p>
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
		fetchRepos: language => dispatch(fetchRepos(language)),
		updateLanguage: language => dispatch(updateLanguage(language))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Popular)
