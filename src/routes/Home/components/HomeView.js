import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import idx from 'idx'

import './HomeView.scss'
import AuthenForm from 'containers/AuthenFormContainer'
import { AuthenType } from 'utils/constants'
import actions from 'actions'

class HomeView extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    user: PropTypes.object
  }

  state = {
    authenType: AuthenType.SIGN_UP
  }

  componentWillReceiveProps(nexProps) {
    this._checkLogedInUser(nexProps)
  }

  render() {
    return (
      <div>
        <AuthenForm type={this.state.authenType} />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
          <button onClick={this._changeAuthenType}>Sign Up</button>
          <button onClick={this._changeAuthenType}>Sign In</button>
        </div>
      </div>
    )
  }

  _changeAuthenType = () => {
    switch (this.state.authenType) {
      case AuthenType.SIGN_IN:
        this.setState({ authenType: AuthenType.SIGN_UP })
        break
      case AuthenType.SIGN_UP:
        this.setState({ authenType: AuthenType.SIGN_IN })
        break
      default:
        //
    }
  }

  _checkLogedInUser = (nexProps) => {
    if (idx(nexProps, _ => _.user)) {
      this.context.router.push('/user')
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: idx(state, _ => _.session.user)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    authenActions: bindActionCreators(actions.authenActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
