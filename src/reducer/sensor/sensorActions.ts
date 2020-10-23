import { Sensor } from '../../model/sensor'

export const sensorActionTypes = {
  GET_SENSOR_LIST: '@sensor/GET_SENSOR_LIST',
  GET_SENSOR_LIST_SUCCESS: '@sensor/GET_SENSOR_LIST_SUCCESS',
  GET_SENSOR_LIST_FAILED: '@sensor/GET_SENSOR_LIST_FAILED',
  CREATE_SENSOR: '@sensor/CREATE_SENSOR',
  CREATE_SENSOR_SUCCESS: '@sensor/CREATE_SENSOR_SUCCESS',
  CREATE_SENSOR_FAILED: '@sensor/CREATE_SENSOR_FAILED',
}

export const getSensorListAction = (payload: {skip: number, limit: number}) => ({
  type: sensorActionTypes.GET_SENSOR_LIST,
  payload,
})

export type SensorList = Sensor[]

export const getSensorListSuccessAction = (payload: SensorList) => ({
  type: sensorActionTypes.GET_SENSOR_LIST_SUCCESS,
  payload,
})

export const getSensorListFailedAction = (error: any) => ({
  type: sensorActionTypes.GET_SENSOR_LIST_FAILED,
  error,
})

export const createSensorAction = (payload: any) => ({
  type: sensorActionTypes.CREATE_SENSOR,
  payload,
})

export const createSensorSuccessAction = () => ({
  type: sensorActionTypes.CREATE_SENSOR_SUCCESS,
})

export const createSensorFailedAction = (error: any) => ({
  type: sensorActionTypes.CREATE_SENSOR_FAILED,
  error,
})
