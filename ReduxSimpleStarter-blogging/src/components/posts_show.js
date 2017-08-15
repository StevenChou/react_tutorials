import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchPost, deletePost } from './../actions'

class PostsShow extends Component {
  componentDidMount() {
    // 如果不存在，才發出請求
    if (!this.props.post) {
      const { id } = this.props.match.params
      console.log('[trace2] ownProps.match.params.id=', id)
      this.props.fetchPost(id)
    }
  }

  onDeleteClick() {
    const { id } = this.props.match.params
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    })

    // bad code[when the post is still being fetched from backend this component will render]
    // this.props.deletePost(this.props.post.id)
  }

  render() {
    // this.props === ownProps
    const { post } = this.props

    // *** 當 component 第一次 render 時，post is undefined!!
    if(!post) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button
         className="btn btn-danger pull-xs-right"
         onClick={this.onDeleteClick.bind(this)}>
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

function mapStateToProps({ posts }, ownProps) {
  console.log('[trace1] ownProps.match.params.id=', ownProps.match.params.id)
  console.log('[trace3] posts[ownProps.match.params.id]=', posts[ownProps.match.params.id])
  console.log('[trace4] posts', posts)
  return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow)