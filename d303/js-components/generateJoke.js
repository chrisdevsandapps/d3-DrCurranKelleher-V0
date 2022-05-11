

// function generateJoke() {
//     return "joke number one"
// }

// export default generateJoke




   
import axios from 'axios'

function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  axios.get('https://icanhazdadjoke.com', config).then((res) => {
    document.getElementById('joke').innerHTML = res.data.joke
  })
}

export default generateJoke