import { Dispatch } from "redux";
import { ActionTypes } from "./types";
import firebase, { auth } from "../firebase";
import { createUserDocument } from "../firebase/utils/createUserDocument";
import { signInWithGoogle } from "../firebase/utils/signInWithGoogle";
import { fetchUserFromId } from "../firebase/utils/fetchUser";

export interface UserData {
  uid: string;
  displayName: string;
  photoURL: string;
  email: string;
  createdAt: Date;
  invites: string[];
}

export interface AuthData {
  isLogginIn: boolean;
  isVerifying: boolean;
  isAuthenticated: boolean;
  user: UserData;
}

export interface SignInRequestAction {
  type: ActionTypes.SIGN_IN_REQUEST;
}

export interface SignInSuccesAction {
  type: ActionTypes.SIGN_IN_SUCCESS;
  user: UserData;
}

export interface VerifyRequestAction {
  type: ActionTypes.VERIFY_REQUEST;
}

export interface VerifySuccesAction {
  type: ActionTypes.VERIFY_SUCCESS;
}

export interface SignInAction {
  type: ActionTypes.SIGN_IN;
  payload: firebase.User;
}

export interface SignOutAction {
  type: ActionTypes.SIGN_OUT;
}

export const signInRequest = () => {
  return {
    type: ActionTypes.SIGN_IN_REQUEST as typeof ActionTypes.SIGN_IN_REQUEST
  };
};

export const signInSucces = (user: UserData) => {
  return {
    type: ActionTypes.SIGN_IN_SUCCESS,
    user
  };
};

export const verifyRequest = () => {
  return {
    type: ActionTypes.VERIFY_REQUEST
  };
};

export const verifySuccess = () => {
  return {
    type: ActionTypes.VERIFY_SUCCESS
  };
};

export const signIn = () => async (dispatch: Dispatch) => {
  dispatch(signInRequest());

  try {
    await signInWithGoogle();
  } catch (error) {
    console.log("Sign in failed:", error);
  }
};

export const signOut = () => async (dispatch: Dispatch) => {
  auth.signOut();

  dispatch<SignOutAction>({ type: ActionTypes.SIGN_OUT });
};

export const verifyAuthentication = () => (dispatch: Dispatch) => {
  dispatch(verifyRequest());
  auth.onAuthStateChanged(async auth => {
    if (auth !== null) {
      createUserDocument(auth);
      const user = await fetchUserFromId(auth.uid);
      dispatch(signInSucces(user));
    }

    dispatch(verifySuccess());
  });
};
