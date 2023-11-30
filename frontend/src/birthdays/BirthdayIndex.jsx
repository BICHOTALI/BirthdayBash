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

	let placesFormatted = places.map((place) => {
		return (
			<div className="col-sm-6" key={place.placeId}>
				<h2>
					<a href="#" onClick={() => history.push(`/places/${place.placeId}`)} >
						{place.name}
					</a>
				</h2>
				<p className="text-center">
					{place.cuisines}
				</p>
				<img style={{ maxWidth: 200 }} src={place.pic} alt={place.name} />
				<p className="text-center">
					Located in {place.city}, {place.state}
				</p>
			</div>
		)
	})
	return (
		<main>
			<h1>Birthday</h1>
			<div className="row">
				{placesFormatted}
			</div>
		</main>
	)
}

export default BirthdayIndex;