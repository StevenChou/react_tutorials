import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

class PostsNew extends Component {
  // field argument 讓 Field component 相應輸入的值的變化
  renderField(field) {
    // const { touched, error } = field.meta
    const { meta: { touched, error } } = field
    const className = `form-group ${(touched && error)? 'has-danger': ''} `

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
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {/*
            {field.meta.error}
        */}
        <div className="text-help">
          {touched? error: ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    // this === component
    console.log(values)
  }

  render() {
    // 由 reduxForm 傳給 PostNew
    // just like redux connect 機制
    const { handleSubmit } = this.props

    // handleSubmit run validate the form and make sure it is true
    // then call the callback
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {/* 不一定要用 label 命名 */}
        <Field
          label="Title For Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

// It be call automatically when submit
function validate(values) {
  // console.log(values) -> {title: 'adf', categories: 'adf', content: 'adf'}
  const errors = {}

  // Validate the inputs from 'values'
  if (!values.title || values.title.length < 3) {
    // field name property
    errors.title = 'Enter the title that is least 3 charaters!'
  }

  if (!values.categories) {
    // field name property
    errors.categories = 'Enter some  categories!'
  }

  if (!values.content) {
    // field name property
    errors.content = 'Enter some content please!'
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties redux form assumes form is invalid.
  return errors
}

export default reduxForm({
  // validate: validate,
  validate,
  form: 'PostsNewForm'  // name of the form
})(PostsNew)

// *** 可以 merge 不同 js 中，相同 form name 的 state
// PostEdit.js
// export default reduxForm({
//   form: 'PostsNewForm'  // name of the form
// })(PostsNew)