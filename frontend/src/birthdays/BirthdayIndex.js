import { useEffect, useState } from "react";
import { useHistory } from "react-router";

function BirthdayIndex(data) {

	const history = useHistory()
	
	const [birthdays, setBirthdays] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(process.env.REACT_APP_SERVER_URL + `birthdays`)
			const resData = await response.json()
			setBirthdays(resData)
		}
		fetchData()
	}, [])

	let birthdaysFormatted = birthdays.map((birthday) => {
		return (
			<div key={birthday.birthdayId}>
				<h2>
					<a href="#" onClick={() => history.push(`/birthdays/${birthday.birthdayId}`)} >
						{birthday.name}
					</a>
				</h2>
				<img style={{ maxWidth: 200 }} src={birthday.pic} alt={birthday.name} />
				<p className="text-center">
					HAPPY BIRTHDAY on {birthday.date}
				</p>
			</div>
		)
	})
	return (
		<main>
			<h1>Birthday</h1>
			<div className="row">
				{birthdaysFormatted}
			</div>
		</main>
	)
}

export default BirthdayIndex;