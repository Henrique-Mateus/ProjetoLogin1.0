import axios from 'axios'

function getUser() {
    axios.get("http://144.22.188.2:5556/authentication/auth/getUser")
    .then(response => {
        console.log(response)
    })
    .catch(error => console.log(error))
}

export default getUser;