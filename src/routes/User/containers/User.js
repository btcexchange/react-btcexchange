import { connect } from 'react-redux'
import idx from 'idx'

import User from '../components/User'

const mapStateToProps = (state) => {
  return {
    user: idx(state, _ => _.session.user)
  }
}

export default connect(mapStateToProps)(User)
