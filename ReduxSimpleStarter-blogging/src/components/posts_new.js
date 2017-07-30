import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
  render() {
    return (
      <form>

      </form>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm'  // name of the form
})(PostsNew)

// *** 可以 merge 不同 js 中，相同 form name 的 state
// PostEdit.js
// export default reduxForm({
//   form: 'PostsNewForm'  // name of the form
// })(PostsNew)