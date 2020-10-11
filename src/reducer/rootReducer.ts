import { combineReducers } from 'redux'
import scenarioReducer, { scenarioInitState, ScenarioState } from './scenario/scenarioReducer'

export interface StoreState {
  scenario: ScenarioState
}

export const initStoreState: StoreState = {
  scenario: scenarioInitState
}

export default combineReducers({
  scenario: scenarioReducer
})
