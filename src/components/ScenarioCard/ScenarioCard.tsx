import React from 'react'
import { makeStyles, Card, CardHeader, CardMedia, CardContent, CardActions } from '@material-ui/core'

const useStyle = makeStyles({
  card: {
    border: '1px solid #CCCCC',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    width: 230,
    height: 277,
  },
})

export default function ScenarioCard() {
  const classes = useStyle()
  return <Card className={classes.card}>
    <CardHeader title='header'></CardHeader>
    <CardMedia component="img" src=''></CardMedia>
    <CardContent>content</CardContent>
    <CardActions>btn</CardActions>
    </Card>
}
