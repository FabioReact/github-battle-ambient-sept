import React from "react"

const SelectLanguage = ({selected, onChange}) => {
	const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"]
	return (
		<nav>
			<ul>
				{languages.map(lang => <li key={lang} onClick={() => onChange(lang)}>{lang}</li> )}
			</ul>
		</nav>
	)
}

export default SelectLanguage
