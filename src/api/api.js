import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    'api_key': '36fb6c1ae80d6e984cbb47312f620722'
  }
})

export const moviesAPI = {
  async getPopular(currentPage = 1) {
    let data = await instance.get(`movie/popular?page=${currentPage}`)
    return data
  },
  async getDetails(id) {
    let data = await instance.get(`movie/${id}`)
    return data
  },
  async getSearch(query) {
    let data = await instance.get(`search/movie?query=${query}`)
    return data
  }
}
