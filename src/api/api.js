import * as axios from 'axios'

const instance = axios.create({
  withCredentials: false,
  baseURL: 'https://api.themoviedb.org/3/movie/',
  headers: {
    'Access-Control-Allow-Headers': '*', 
    'API-KEY': '36fb6c1ae80d6e984cbb47312f620722',
    mode: 'no-cors'
  }
})

export const movieAPI = {
  async getPopular() {
    let data = await instance.get(`popular`)
    console.log(data)
  }
}