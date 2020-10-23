import { AnyAction } from 'redux'
import { sensorActionTypes } from './sensorActions'
import { Sensor } from '../../model/sensor'

export interface sensorState {
  sensorList: Sensor[]
}

export const sensorInitState: sensorState = {
  sensorList: []
}

export default function sensorReducer(state: sensorState = sensorInitState, action: AnyAction) {
  switch(action.type) {
    case sensorActionTypes.GET_SENSOR_LIST_SUCCESS:
      return { ...state, sensorList: action.payload}
    default:
      return state
  }
}
