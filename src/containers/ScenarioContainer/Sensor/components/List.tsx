import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import React from 'react'
import { Sensor } from '../../../../model/sensor'

export default function List() {
  const tableHead: Array<keyof Sensor> = ['id', 'display_name', 'type', 'extra']
  const sensorList: Sensor[] = [
    {
      id: '1',
      display_name: 'sensor 1',
      type: 'A',
    },
    {
      id: '2',
      display_name: 'sensor 2',
      type: 'B',
      extra: 'optional field',
    }
  ]

  return <>
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
  </>
}
