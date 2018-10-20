import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080'
class BookManageService {
  getBookList () {
    return axios.get('/ss/book/listbook')
  }
}
export default new BookManageService()
