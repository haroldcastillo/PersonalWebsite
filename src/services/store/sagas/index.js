import { all, fork } from "redux-saga/effects";

function* rootSaga() {
	yield all([
		// Add other sagas here if you have more than one
		// fork(userSaga),
    // fork(authSaga),
    // fork(establishmentsSaga),
    // fork(favoriteSaga),
	]);
}

export default rootSaga;
