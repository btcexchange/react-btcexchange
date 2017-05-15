import React, { Component, PropTypes } from 'react'

class User extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    user: PropTypes.object
  }

  render() {
    const { name, email, photoUrl, uid, emailVerified } = this.props.user
    return (
      <div>
        <div><span>{`Name: ${name}`}</span></div>
        <div><span>{`Email: ${email}`}</span></div>
        <div><span>{`Photo: ${photoUrl}`}</span></div>
        <div><span>{`UID: ${uid}`}</span></div>
        <div><span>{`Is verified: ${emailVerified}`}</span></div>
      </div>
    )
  }
}

export default User
