import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SensorRequestBody } from '../../model/sensor'
import { StoreState } from '../../reducer/rootReducer'
import { createSensorAction, getSensorListAction } from '../../reducer/sensor/sensorActions'
import List from './components/List'

export default function Sensor() {
  const dispatch = useDispatch()
  const { sensorList } = useSelector((state: StoreState) => ({
    sensorList: state.sensor.sensorList
  }))

  const onGetSensorList = useCallback(
    (skip: number, limit: number) => {
    dispatch(getSensorListAction({ skip, limit }))
    },
    [dispatch]
  )

  const onCreateSensor = useCallback(
    (formData: SensorRequestBody) => {
      dispatch(createSensorAction(formData))
    },
    [dispatch]
  )

  return <List sensorList={sensorList} onGetSensorList={onGetSensorList} onCreateSensor={onCreateSensor}/>
}
