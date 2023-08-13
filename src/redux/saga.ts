import Axios from "axios";
import { IUser, IUsers } from "../Interfaces/interface";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  ALL_USERS_REQUEST,
  CREATE_USERS_REQUEST,
  DELETE_USERS_REQUEST,
} from "./constants";
import {
  createUserFail,
  createUserSuccess,
  fetchAllUsersSuccess,
} from "./action";

const fetchAllUsersAPI = (): any => {
  return new Promise((resolve: IUsers | any, reject: any) => {
    Axios.get(`http://localhost:4000/api/v1`).then(
      (response): IUsers => resolve(response)
    );
  });
};

function* allUsers(action: any): Generator<any> {
  try {
    const response: IUsers[] | any = yield call(fetchAllUsersAPI);
    yield put(fetchAllUsersSuccess(response));
  } catch (error) {
    console.log(error);
  }
}

const createUserAPI = (data: IUsers): Promise<IUser> => {
  return new Promise((resolve, reject) => {
    Axios.post(`http://localhost:4000/api/v1`, data).then((response: any) => {
      resolve(response);
    });
  });
};

function* createUser(action: any): Generator<any> {
  try {
    const response: any = yield call(createUserAPI, action.payload);
    console.log(response);
    yield put(createUserSuccess(response));
  } catch (error) {
    yield put(createUserFail(error));
  }
}

const deleteUserAPI = (id: number) => {
  return new Promise((resolve, reject) => {
    Axios.delete(`http://localhost:4000/api/v1/${id}`).then((response) => {
      resolve(response);
    });
  });
};

function* deleteUser(action: any): Generator<any> {
  try {
    const response = yield call(deleteUserAPI, action.payload);
    console.log(action.payload);
  } catch (error) {}
}

function* userSaga(): Generator<any> {
  yield takeLatest(ALL_USERS_REQUEST, allUsers);
  yield takeLatest(CREATE_USERS_REQUEST, createUser);
  yield takeLatest(DELETE_USERS_REQUEST, deleteUser);
}

export default userSaga;
