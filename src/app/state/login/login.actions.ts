import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const initLoginAction = createAction('Init Login');
export const clearLogin = createAction('Clear Login')
export const updateUser = createAction('Update User', props<{user:User}>())