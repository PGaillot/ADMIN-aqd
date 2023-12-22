import { createAction, createActionGroup, props } from "@ngrx/store";
import { HouseRequest } from "src/app/models/house-request.model";
import { Project } from "src/app/models/project.model";


export const initState = createAction('Init State');
export const updateProjects = createAction('Update Projects', props<{projects:Project[]}>());
export const updateHouseRequests = createAction('Update HouseRequests', props<{houseRequest:HouseRequest[]}>());
export const clearState = createAction('Clear State');
export const createProject = createAction('Create Project', props<{project:Project}>());