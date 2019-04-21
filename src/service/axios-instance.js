import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://react-my-burger-ad326.firebaseio.com/'
})
//https://react-my-burger-ad326.firebaseio.com/
//  'http:localhost:8888' for local
export default instance;