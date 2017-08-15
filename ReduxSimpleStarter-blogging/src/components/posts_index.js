import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import { fetchPosts } from './../actions'

class PostsIndex extends Component {
  componentDidMount() {
    console.log('##[posts_index] mount ')
    this.props.fetchPosts()
  }

  renderPost() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      )
    })
  }

  render() {
    console.log(this.props.posts)
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add A Post
          </Link>
        </div>
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