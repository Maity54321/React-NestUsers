import { IPagination, IUser, IUsers } from "../Interfaces/interface";
import {
  ALL_USERS_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  CREATE_USERS_FAIL,
  CREATE_USERS_REQUEST,
  CREATE_USERS_SUCCESS,
  DELETE_USERS_FAIL,
  DELETE_USERS_REQUEST,
  DELETE_USERS_SUCCESS,
} from "./constants";

export const fetchAllUsers: any = () => ({
  type: ALL_USERS_REQUEST,
  //   payload: data,
});

export const fetchAllUsersSuccess: any = (data: IUsers) => ({
  type: ALL_USERS_SUCCESS,
  payload: data,
});

export const fetchaAllUsersFail: any = (error: any) => ({
  type: ALL_USERS_FAIL,
  payload: error,
});

export const createUserReuest = (data: IUser) => ({
  type: CREATE_USERS_REQUEST,
  payload: data,
});

export const createUserSuccess = (data: IUser) => ({
  type: CREATE_USERS_SUCCESS,
  payload: data,
});

export const createUserFail = (error: any) => ({
  type: CREATE_USERS_FAIL,
  payload: error,
});

export const deleteUserRequest = (id: number) => ({
  type: DELETE_USERS_REQUEST,
  payload: id,
});

export const deleteUserSuccess = (data: any) => ({
  type: DELETE_USERS_SUCCESS,
  payload: data,
});

export const deleteUserFail = (error: any) => ({
  type: DELETE_USERS_FAIL,
  payload: error,
});
