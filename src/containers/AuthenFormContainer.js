import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AuthenForm from 'components/AuthenForm'
import actions from 'actions'

const mapStateToProps = (state) => {
  return {
    authen: state.authen
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    authenActions: bindActionCreators(actions.authenActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenForm)
