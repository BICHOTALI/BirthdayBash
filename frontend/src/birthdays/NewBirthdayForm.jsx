import { useState } from "react";
import { useHistory } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function NewBirthdayForm() {
  const history = useHistory();

  const [birthday, setBirthday] = useState({
    name: '',
    day: '',
    month: '',
    year: '',
  });

  const handleDateChange = (date) => {
    // Extract day, month, and year from the selected date
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are 0-indexed
    const year = date.getFullYear();

    setBirthday({ ...birthday, day, month, year });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(process.env.REACT_APP_SERVER_URL + `birthdays`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(birthday),
    });

    history.push('/places');
  };

  return (
    <main>
      <h1>Add Your Birthday!</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            required
            value={birthday.name}
            onChange={(e) => setBirthday({ ...birthday, name: e.target.value })}
            className="form-control"
            id="name"
            name="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="birthdate">Birthdate</label>
          <DatePicker
            selected={new Date(birthday.year, birthday.month - 1, birthday.day)}
            onChange={handleDateChange}
            className="form-control"
            id="birthdate"
            dateFormat="MM/dd/yyyy"
          />
        </div>
        <input className="btn btn-primary" type="submit" value="Add Place" />
      </form>
    </main>
  );
}

export default NewBirthdayForm;
