import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
  // field argument 讓 Field component 相應輸入的值的變化
  renderField(field) {
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
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    )
  }

  render() {
    return (
      <form>
        {/* 不一定要用 label 命名 */}
        <Field
          label="Title For Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Tags"
          name="tags"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
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