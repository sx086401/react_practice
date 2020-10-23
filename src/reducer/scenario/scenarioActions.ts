import { Scenario } from '../../model/scenario'

export const scenarioActionTypes = {
  GET_SCENARIO_LIST: '@scenario/GET_SCENARIO_LIST',
  GET_SCENARIO_LIST_SUCCESS: '@scenario/GET_SCENARIO_LIST_SUCCESS',
  GET_SCENARIO_LIST_FAILED: '@scenarios/GET_SCENARIO_LIST_FAILED',

  DELETE_SCENARIO: '@scenario/DELETE_SCENARIO',
  DELETE_SCENARIO_SUCCESS: '@scenario/DELETE_SCENARIO_SUCCESS',
  DELETE_SCENARIO_FAILED: '@scenarios/DELETE_SCENARIO_FAILED',
}

export const getScenarioListAction = () => ({
  type: scenarioActionTypes.GET_SCENARIO_LIST,
})

export type ScenarioList = Scenario[]

export const getScenarioListSuccessAction = (payload: Scenario[]) => ({
  type: scenarioActionTypes.GET_SCENARIO_LIST_SUCCESS,
  payload,
})

export const getScenarioListFailedAction = (error: any) => ({
  type: scenarioActionTypes.GET_SCENARIO_LIST_FAILED,
  error,
})

export type DeleteScenarioData = number[]
export const deleteScenariosAction = (payload: DeleteScenarioData) => ({
  type: scenarioActionTypes.DELETE_SCENARIO,
  payload,
})

export const deleteScenariosSuccessAction = (payload: DeleteScenarioData) => ({
  type: scenarioActionTypes.DELETE_SCENARIO_SUCCESS,
  payload,
})

export const deleteScenariosFailedAction = (error: any) => ({
  type: scenarioActionTypes.DELETE_SCENARIO_SUCCESS,
  error,
})
