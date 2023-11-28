import { useEffect, useState } from "react";
import { useHistory } from "react-router";

function PlaceIndex(data) {

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

	let birthdaysFormatted = {
		return (
			<div className="col-sm-6" key={place.placeId}>
			</div>
		)
	})
	return (
		<main>
		</main>
	)
}

export default BirthdayIndex;