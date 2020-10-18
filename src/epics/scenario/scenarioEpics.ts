import { AnyAction } from 'redux'
import { ActionsObservable, ofType } from 'redux-observable'
import {
  scenarioActionTypes,
  getScenarioListSuccessAction,
  getScenarioListFailedAction,
  deleteScenariosSuccessAction,
  deleteScenariosFailedAction,
} from '../../reducer/scenario/scenarioActions'
import { of } from 'rxjs'
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators'
import { ajax, AjaxResponse } from 'rxjs/ajax'


export const getScenarioEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(scenarioActionTypes.GET_SCENARIO_LIST),
    exhaustMap(() =>
      ajax.get('/v1/scenarios').pipe(
        map((res: AjaxResponse) => (getScenarioListSuccessAction(res.response))),
        catchError(err => of(getScenarioListFailedAction(err)))
      ),
    ),
  )

export const deleteScenarioEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(scenarioActionTypes.DELETE_SCENARIO),
    switchMap((action) =>
      ajax.delete(`/v1/scenarios/${action.payload}`).pipe(
        map((res: AjaxResponse) => (deleteScenariosSuccessAction(res.response))),
        catchError(err => of(deleteScenariosFailedAction(err)))
      )
    ),
  )


export default [getScenarioEpic, deleteScenarioEpic]
