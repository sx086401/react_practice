import { Button, Dialog, DialogContent, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useState } from 'react'
import  Form  from './Form'
import { Sensor, SensorRequestBody } from '../../../model/sensor'
import { useCallback } from 'react'

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

  const beforeSubmit = useCallback((formData: SensorRequestBody) => {
      toggleForm(prev => !prev)
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
    <DialogContent>
      <Form onSubmit={beforeSubmit}/>
    </DialogContent>
  </Dialog>
  </>
}
