import React, { useCallback, useEffect } from 'react'
import { Button, makeStyles, Icon } from '@material-ui/core'
import ScenarioCard from '../ScenarioCard/ScenarioCard'
import { Scenario } from '../../model/scenario'

const useStyle = makeStyles({
  button: {
    border: '2px solid #525B5C',
    borderRadius: 16,
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap'
  }
})

interface Props {
  scenarioList: Scenario[]
  onGetScenarioList: () => void
}

export default function ScenarioList(props: Props) {
  const { scenarioList, onGetScenarioList } = props
  const classes = useStyle()

  useEffect(() => {
    onGetScenarioList()
  }, [onGetScenarioList])

  const onButtonClick = useCallback(() => {
    onGetScenarioList()
  }, [onGetScenarioList])

  return <>
      <Button className={classes.button} variant="outlined" onClick={onButtonClick}>
        <Icon>refresh</Icon>
        update
      </Button>
      <div className={classes.list}>
        {scenarioList.map(scenario => <ScenarioCard key={scenario.id} scenario={scenario}/>)}
      </div>
  </>
}
