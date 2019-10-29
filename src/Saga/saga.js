import { put, take,fork,takeEvery ,call} from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import firebase from "firebase";
import { config } from '../Config/config';
import { Data } from '../Api/Api';
import axios from "axios"

firebase.initializeApp(config);

const database = firebase.database();

function* writeUserData ({payload}) {
  try {
    yield database.ref("users").push().set(payload);
    yield alert("user added successfully");
    yield window.location.reload()
  } catch (err) {
    yield put({ type:"ERROR" });
    alert("something went wrong,fill in all inputs");
  }
}

function* startListener() {
  // #1
  // const data = yield call(Data);
  const channel = new eventChannel(emiter => {
   const d = axios.get("https://us-central1-enye-reduxx.cloudfunctions.net/users")
    .then(({data})=>{
      emiter({data:data})
    })

    // #2
    return () => {
      d.off();
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




