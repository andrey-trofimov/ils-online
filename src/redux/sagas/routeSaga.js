import { call, put, takeLatest } from "redux-saga/effects";
import { getRouteSaccess } from "../slices/routeSlice";
import api from "../../api/osrm";

function transposeCoordinates(coordinates) {
  let newCoordinates = [];
  coordinates.forEach((latLng) => newCoordinates.push([latLng[1], latLng[0]]));
  return newCoordinates;
}

function* fetchRoute(action) {
  const response = yield call(api, action.payload);
  const routeObj = yield response.json();
  const { coordinates } = routeObj.routes[0].geometry;
  yield put(getRouteSaccess(transposeCoordinates(coordinates)));
}

function* routeSaga() {
  yield takeLatest("route/getRouteFetch", fetchRoute);
}

export default routeSaga;
