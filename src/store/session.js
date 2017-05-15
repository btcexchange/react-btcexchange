import { Actions } from 'utils/constants'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.CURRENT_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user
      }

    default:
      return state
  }
}
