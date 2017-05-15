import React, { PropTypes } from 'react'
import { Field, Form } from 'react-redux-form'

import { AuthenType } from 'utils/constants'

const getAuthenType = (type) => {
  switch (type) {
    case AuthenType.SIGN_IN:
      return 'SIGN IN'
    case AuthenType.SIGN_UP:
      return 'SIGN UP'
    default:
      return ''
  }
}

class AuthenForm extends React.Component {
  static propTypes = {
    authen: PropTypes.object,
    authenActions: PropTypes.object,
    type: PropTypes.string
  }

  render() {
    const { authen, type } = this.props
    return (
      <Form model='authen' onSubmit={this._onSubmit}>
        <Field model='authen.email'>
          <input type='email' placeholder='Account name' />
        </Field>
        <Field model='authen.password'>
          <input type='password' />
        </Field>
        <button>{getAuthenType(type)}</button>
      </Form>
    )
  }

  _isSignUp = () => {
    return this.props.type === AuthenType.SIGN_UP
  }

  _onSubmit = (authen) => {
    const { email, password } = authen
    if (this._isSignUp()) {
      this.props.authenActions.signUp(email, password)
    } else {
      this.props.authenActions.signIn(email, password)
    }
  }
}

export default AuthenForm
