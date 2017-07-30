import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
  // field argument 讓 Field component 相應輸入的值的變化
  renderTitleField(field) {
    // return (
    //   <div>
    //     <input
    //       onChange={field.input.onChange}
    //       onFocus={field.input.onFocus}
    //       onBlur={field.input.onBlur}
    //       .....
    //     />
    //   </div>
    // )

    // 一次把所有 field.input 的 event handlers 帶出
    return (
      <div>
        <input
          type
          {...field.input}
        />
      </div>
    )
  }

  render() {
    return (
      <form>
        <Field
          name="title"
          component={this.renderTitleField}
        />
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