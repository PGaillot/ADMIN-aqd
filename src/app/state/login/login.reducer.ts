import {
  ActionReducer,
  MetaReducer,
  createReducer,
  on,
  props,
} from '@ngrx/store'
import { clearLogin, initLoginAction, updateUser } from './login.actions'
import { User } from 'src/app/models/user.model'

export interface LoginState{
  user:User
}

const initialLoginState:LoginState = {
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
  initialLoginState,
  //? INIT LOGIN ACTION
  on(initLoginAction, (state:LoginState) => state),

  //? UPDATE USER ACTION
  on(updateUser, (state:LoginState, props) => {
    return {
      ...state,
      user: props.user,
    }
  }),

  //? ClEAR LOGIN ACTION
  on(clearLogin, (state:LoginState) => initialLoginState)
)
