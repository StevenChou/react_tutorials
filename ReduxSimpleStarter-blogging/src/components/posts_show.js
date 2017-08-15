import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPost } from './../actions'

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    console.log('[trace2] ownProps.match.params.id=', id)
    this.props.fetchPost(id)
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

export default connect(mapStateToProps, { fetchPost })(PostsShow)