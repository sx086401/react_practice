import { AnyAction } from 'redux'
import { scenarioActionTypes } from './scenarioActions'
import { Scenario } from '../../model/scenario'

export interface ScenarioState {
  scenarioList: Scenario[]
}

export const scenarioInitState: ScenarioState = {
  scenarioList: []
}

export default function scenarioReducer(state: ScenarioState = scenarioInitState, action: AnyAction) {
  switch(action.type) {
    case scenarioActionTypes.GET_SCENARIO_LIST_SUCCESS:
      return { ...state, scenarioList: action.payload }
    default:
      return state
  }
}
