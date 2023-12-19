import {
  ActionReducer,
  MetaReducer,
  createReducer,
  on,
  props,
} from '@ngrx/store'
import { clearLogin, initLoginAction, updateUser } from './login.actions'

const initialState = {
  user: {
    id:'',
    username: '',
    mail: '',
  }
}

function log(actionReducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    const currentState = actionReducer(state, action)
    console.groupCollapsed(action.type)
    console.log('before init : ', state)
    console.log('after init : ', currentState)
    console.groupEnd()
    return currentState
  }
}

export const metaReducers: MetaReducer[] = [log]

export const loginReducer = createReducer(
  initialState,
  //? INIT LOGIN ACTION
  on(initLoginAction, (state) => state),

  //? UPDATE USER ACTION
  on(updateUser, (state, props) => {
    return {
      ...state,
      user: props.user,
    }
  }),

  //? ClEAR LOGIN ACTION
  on(clearLogin, (state) => initialState)
)
