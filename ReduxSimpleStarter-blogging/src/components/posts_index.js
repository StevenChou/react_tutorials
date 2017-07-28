import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { fetchPosts } from './../actions'

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  renderPost() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      )
    })
  }

  render() {
    console.log(this.props.posts)
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPost()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts }
}

// 第一個參數 state
// export default connect(null, { fetchPosts: fetchPosts })(PostsIndex)
export default connect(mapStateToProps, { fetchPosts })(PostsIndex)