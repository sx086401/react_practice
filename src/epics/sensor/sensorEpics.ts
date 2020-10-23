import { AnyAction } from 'redux'
import { ActionsObservable, ofType } from 'redux-observable'
import {
  getSensorListSuccessAction,
  getSensorListFailedAction,
  sensorActionTypes, createSensorSuccessAction, createSensorFailedAction
} from '../../reducer/sensor/sensorActions'
import { catchError, exhaustMap, map } from 'rxjs/operators'
import { of } from 'rxjs'
import { ajax, AjaxResponse } from 'rxjs/ajax'

export const getSensorListEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(sensorActionTypes.GET_SENSOR_LIST),
    exhaustMap(({ payload: { skip, limit } }) =>
      ajax.get(`/v1/sensors?skip=${skip}&limit=${limit}`).pipe(
        map((res: AjaxResponse) => (getSensorListSuccessAction(res.response))),
        catchError((err) => of(getSensorListFailedAction(err))),
      ),
    ),
  )

export const createSensorEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(sensorActionTypes.CREATE_SENSOR),
    exhaustMap(({ payload }) =>
      ajax.post('/v1/sensors', payload, { 'Content-Type': 'application/json' } ).pipe(
        map(() => (createSensorSuccessAction())),
        catchError((err) => of(createSensorFailedAction(err)))
      )
    ),
  )

export default [getSensorListEpic, createSensorEpic]
