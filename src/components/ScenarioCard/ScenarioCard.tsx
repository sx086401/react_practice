import React from 'react'
import { makeStyles, Card, CardHeader, CardMedia, CardContent, CardActions } from '@material-ui/core'
import { Scenario } from '../../model/scenario'

const useStyle = makeStyles({
  card: {
    border: '1px solid #CCCCC',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    width: 230,
    height: 277,
  },
})

interface Props {
  scenario: Scenario,
}

export default function ScenarioCard(props: Props) {
  const { scenario } = props
  const classes = useStyle()

  return <Card className={classes.card}>
    <CardHeader title='header'></CardHeader>
    <CardMedia component="img" src=''></CardMedia>
    <CardContent>{scenario.display_name}</CardContent>
    <CardActions>btn</CardActions>
    </Card>
}
