import _ from 'lodash'

import { FETCH_POSTS } from './../actions'

// receive previous state
// 設定 state 初始值
export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // 經過 redux-promise middleware 處理，可以直接取得資料
      // console.log(action.payload.data) // [post1, post2]

      // 我們要轉化為 { 4: post }
      return _.mapKeys(action.payload.data, 'id')
    default:
      return state
  }
}