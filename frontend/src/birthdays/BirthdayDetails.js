import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

function BirthdayDetails() {
    
    const { birthdayId } = useParams()

    const history = useHistory()

    const [birthday, setBirthday] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(process.env.REACT_APP_SERVER_URL+`places/${birthdayId}`)
            const resData = await response.json()
            setBirthday(resData)
        }
        fetchData()
    }, [birthdayId])

    if (birthday === null) {
        return <h1>Loading</h1>
    }

    function editBirthday() {
        history.push(`/birthdays/${birthday.birthdayId}/edit`)
    }

    async function deleteBirthday() {
        await fetch(process.env.REACT_APP_SERVER_URL+`birthday/${birthday.birthdayId}`, {
            method: 'DELETE'
        })
        history.push('/birthdays')
    }

    return (
        <main>
            <div>
                Birthday Details bleh heheheheheh
            </div>
        </main>
    )

}

export default BirthdayDetails