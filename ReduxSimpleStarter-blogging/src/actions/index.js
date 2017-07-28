import axios from 'axios'

export const FETCH_POSTS = 'fetch_posts'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=stevenchou1224'

export function fetchPosts() {
  const request = axios.request(`${ROOT_URL}/posts${API_KEY}`)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}