import { firestore } from "../firebase";
import { Dispatch } from "redux";
import { ActionTypes } from "../actions";
import { StoreState } from "../reducers";
import { addDocToCollection } from "../firebase/utils/addDocToCollection";

export enum TASK_STATUS {
  UNASSIGNED,
  NOT_STARTED,
  STUCK,
  STARTED,
  REVIEW,
  COMPLETED
}

export interface TaskData {
  id: string;
  flowSlug: string;
  projectSlug: string;
  createdBy: string;
  title: string;
  description: string;
  assigned: string[];
  status: TASK_STATUS;
  date: Date;
}

export interface TasksData {
  isFetching: boolean;
  items: { [key: string]: TaskData };
}

export interface CreateTaskAction {
  type: ActionTypes.CREATE_TASK;
}

export interface EditTaskAction {
  type: ActionTypes.EDIT_TASK;
  task: TaskData;
}

export interface FetchTasksRequestAction {
  type: ActionTypes.FETCH_TASKS_REQUEST;
}

export interface FetchTasksAction {
  type: ActionTypes.FETCH_TASKS;
}

export interface FetchTasksSuccessAction {
  type: ActionTypes.FETCH_TASKS_SUCCESS;
  tasks: { [key: string]: TaskData };
}

export interface DeleteTaskAction {
  type: ActionTypes.DELETE_TASK;
  id: number;
}

export const createTask = (
  title: string,
  projectSlug: string,
  flowSlug: string
) => async (dispatch: Dispatch, getState: () => StoreState) => {
  const creator = getState().auth.user.uid;

  addDocToCollection("tasks", {
    flowSlug: flowSlug,
    projectSlug: projectSlug,
    createdBy: creator,
    title: title,
    assigned: [],
    status: TASK_STATUS.UNASSIGNED
  });

  dispatch<CreateTaskAction>({
    type: ActionTypes.CREATE_TASK
  });
};

export const fetchTasksRequest = () => {
  return {
    type: ActionTypes.FETCH_TASKS_REQUEST
  };
};

export const fetchTasksSuccess = (tasks: { [key: string]: TaskData }) => {
  return {
    type: ActionTypes.FETCH_TASKS_SUCCESS,
    tasks
  };
};

export const fetchTasks = (projectSlug: string) => async (
  dispatch: Dispatch
) => {
  dispatch(fetchTasksRequest());

  try {
    firestore
      .collection("tasks")
      .where("projectSlug", "==", projectSlug)
      .onSnapshot(snapshot => {
        let tasks = {};

        tasks = snapshot.docs.reduce(
          (prev, doc) => ({
            ...prev,
            [doc.id]: doc.data()
          }),
          {}
        );
        if (tasks !== null) {
          dispatch(fetchTasksSuccess(tasks));
        }
      });
  } catch (error) {
    console.log(error);
  }
};

export const editTask = (id: string, values: {}) => async (dispatch: Dispatch) => {

  try {
    firestore.collection('tasks').doc(id).update(values);
  }
  catch(e) {
    console.log("Error updating task", e)
  }
} 