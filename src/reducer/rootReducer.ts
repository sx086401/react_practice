import { combineReducers } from 'redux'
import scenarioReducer, { scenarioInitState, ScenarioState } from './scenario/scenarioReducer'
import sensorReducer, { sensorInitState, sensorState } from './sensor/sensorReducer'

export interface StoreState {
  scenario: ScenarioState
  sensor: sensorState
}

export const initStoreState: StoreState = {
  scenario: scenarioInitState,
  sensor: sensorInitState,
}

export default combineReducers({
  scenario: scenarioReducer,
  sensor: sensorReducer,
})
