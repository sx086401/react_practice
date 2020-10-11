import { Scenario } from '../../model/scenario'

export const scenarioActionTypes = {
  GET_SCENARIO_LIST: '@scenario/GET_SCENARIO_LIST',
  GET_SCENARIO_LIST_SUCCESS: '@scenario/GET_SCENARIO_LIST_SUCCESS',
}

export const getScenarioListAction = () => ({
  type: scenarioActionTypes.GET_SCENARIO_LIST,
})
export type ScenarioList = Scenario[]
export const getScenarioListActionSuccess = (payload: Scenario[]) => ({
  type: scenarioActionTypes.GET_SCENARIO_LIST_SUCCESS,
  payload,
})
