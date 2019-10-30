import { put, take,fork,takeEvery ,call} from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import firebase from "firebase";
import { config } from '../Config/config';
import { Data } from '../Api/Api';
import axios from "axios"

firebase.initializeApp(config);

const database = firebase.database();

function* writeUserData ({payload}) {
  // const data=yield call (Data)
  // console.log(data)
  try {
    yield Data(payload);
    yield alert("user added successfully");
    yield window.location.reload()
  } catch (err) {
    yield put({ type:"ERROR" });
    alert("something went wrong,fill in all inputs");
  }
}

function* startListener() {
  // #1
  const channel = new eventChannel(emiter => {
    const listener = database.ref("users").on("value", snapshot => {
      emiter({ data: snapshot.val() || {} });
    });

    // #2
    return () => {
      listener.off();
    };
  });

  // #3
  while (true) {
    const { data } = yield take(channel);
    const Data = Object.keys(data).map((i, j) => data[i]);
    yield put({ type: "submit-Async" , payload: Data.reverse() });
  }
}

export default function* saga() {
  yield takeEvery("submit", writeUserData);
  yield fork(startListener);
}




