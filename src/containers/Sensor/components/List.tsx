import { Button, Dialog, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import React, { useCallback, useEffect, useState } from 'react'
import { Sensor, SensorRequestBody } from '../../../model/sensor'
import { apiResponse } from '../../../epics/utils'
import { sensorActionTypes } from '../../../reducer/sensor/sensorActions'
import FinalForm from './FinalForm'

interface Props {
  sensorList: Sensor[]
  onGetSensorList: (skip: number, limit: number) => void
  onCreateSensor: (formData: SensorRequestBody) => void
}

export default function List(props: Props) {
  const { sensorList, onGetSensorList, onCreateSensor} = props
  const [showForm, toggleForm] = useState(false)
  const tableHead: Array<keyof Sensor> = ['id', 'display_name', 'type', 'extra']

  useEffect(() => {
    onGetSensorList(0, 10)
  }, [onGetSensorList])

  useEffect(() => {
    const subscription = apiResponse.subscribe(
      { nextActions: [sensorActionTypes.CREATE_SENSOR_SUCCESS]},
      { next: () => toggleForm(prev => !prev) }
    )
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const beforeSubmit = useCallback((formData: SensorRequestBody) => {
      onCreateSensor(formData)
    },
    [onCreateSensor],
  )

  return <>
  <div>
    <Button onClick={() => toggleForm(prev => !prev)}>Add</Button>
  </div>
  <Table>
    <TableHead>
      <TableRow>
        {tableHead.map(head =>
          <TableCell key={head}>{head}</TableCell>
        )}
      </TableRow>
    </TableHead>
    <TableBody>
      {sensorList.map(sensor => (
        <TableRow key={sensor.id}>
          {tableHead.map((head, idx) =>
            <TableCell key={idx}>{sensor[head]}</TableCell>
          )}
        </TableRow>
      ))}
    </TableBody>
  </Table>
  <Dialog open={showForm}>
    <FinalForm onSubmit={beforeSubmit}/>
  </Dialog>
  </>
}
