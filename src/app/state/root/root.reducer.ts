import { ActionReducer, MetaReducer, createReducer, on } from '@ngrx/store'
import { Project } from 'src/app/models/project.model'
import { createProject, initState, updateHouseRequests, updateProjects } from './root.actions'
import { HouseRequest } from '../../models/house-request.model'

export interface State {
  root: RootState
}

export interface RootState {
  project: {
    projects: Project[]
  }
  houseRequest: {
    houseRequests: HouseRequest[]
    pendingHouseRequests: number
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

export const initialState: State = {
  root: {
    project: {
      projects: [],
    },
    houseRequest: {
      houseRequests: [],
      pendingHouseRequests: 0,
    },
  },
}

export const rootReducer = createReducer(
  initialState,
  //* INIT STATE
  on(initState, (state: State) => state),

  //* UPDATE PROJECTS
  on(updateProjects, (state: State, props) => {
    return {
      ...state,
      projects: props.projects,
    }
  }),

  //* UPDATE HOUSE REQUEST
  on(updateHouseRequests, (state: State, props) => {
    return {
      ...state,
      houseRequests: props.houseRequest,
    }
  }),

  //* CREATE PROJECT
  on(createProject, (state:State, props) => {
    return{
      ...state,
      projects: [ props.project , ...state.root.project.projects]
    }
  })
)
