import React, { useCallback } from 'react'
import { Button, makeStyles, Icon } from '@material-ui/core'
import ScenarioCard from '../ScenarioCard/ScenarioCard'

const useStyle = makeStyles({
  button: {
    border: '2px solid #525B5C',
    borderRadius: 16,
  }
})

export default function ScenarioList() {
  const classes = useStyle()

  const onButtonClick = useCallback(
    () => {
    }, [])

  return <>
      <Button className={classes.button} variant="outlined" onClick={onButtonClick}>
        <Icon>refresh</Icon>
        update
      </Button>
      <ScenarioCard></ScenarioCard>
  </>
}
