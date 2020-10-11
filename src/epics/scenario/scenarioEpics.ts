import { AnyAction } from 'redux'
import { ActionsObservable, ofType } from 'redux-observable'
import { scenarioActionTypes, getScenarioListActionSuccess, ScenarioList } from '../../reducer/scenario/scenarioActions'
import { of } from 'rxjs'
import { catchError, exhaustMap, map } from 'rxjs/operators'
import FakeScenarioImg from '../../assets/icons/fake-scenario.png'


export const getScenarioEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(scenarioActionTypes.GET_SCENARIO_LIST),
    exhaustMap(() =>
      of([
        {
          id: 1,
          display_name: 'scenario1',
          created_at: '2019-12-19T11:22:33Z',
          updated_at: '2019-12-19T11:22:33Z',
          thumbnail_url: FakeScenarioImg,
        },
        {
          id: 2,
          display_name: 'scenario2',
          created_at: '2019-12-19T11:22:33Z',
          updated_at: '2019-12-19T11:22:33Z',
          thumbnail_url: FakeScenarioImg,
        },
        {
          id: 3,
          display_name: 'scenario3',
          created_at: '2019-12-19T11:22:33Z',
          updated_at: '2019-12-19T11:22:33Z',
          thumbnail_url: FakeScenarioImg,
        },
        {
          id: 4,
          display_name: 'scenario4',
          created_at: '2019-12-19T11:22:33Z',
          updated_at: '2019-12-19T11:22:33Z',
          thumbnail_url: FakeScenarioImg,
        }
      ]).pipe(
        map((res: ScenarioList) => (getScenarioListActionSuccess(res))),
        catchError(err => of({type: 'err', err}))
      ),
    ),
  )

export default [getScenarioEpic]
