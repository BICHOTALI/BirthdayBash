import { useState } from "react"
import { useHistory } from "react-router"

function NewPlaceForm() {

	const history = useHistory()

	const [birthday, setBirthday] = useState({
		name: '',
		day: '',
		month: '',
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(process.env.REACT_APP_SERVER_URL + `birthdays`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(birthday)
		})

		history.push('/places')
	}

	return (
		<main>
			<h1>Add Your Birthday!</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						required
						value={place.name}
						onChange={e => setPlace({ ...place, name: e.target.value })}
						className="form-control"
						id="name"
						name="name"
					/>
				</div>
				<div className="Month">
					<label htmlFor="founded">Birth Month</label>
					<input
						required
						value={place.founded}
						onChange={e => setPlace({ ...place, founded: e.target.value })}
						className="form-control"
						id="month"
						name="month"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="Month">Day</label>
					<input
						value={place.city}
						onChange={e => setPlace({ ...place, city: e.target.value })}
						className="form-control"
						id="city"
						name="city"
					/>
				</div>
				<input className="btn btn-primary" type="submit" value="Add Place" />
			</form>
		</main>
	)
}

export default NewPlaceForm