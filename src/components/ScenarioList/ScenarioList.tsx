import React, { useCallback, useEffect, useState } from 'react'
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

export enum ScenarioListMode {
  View = 'view',
  Delete = 'delete',
}

interface Props {
  scenarioList: Scenario[]
  onGetScenarioList: () => void
}

export default function ScenarioList(props: Props) {
  const { scenarioList, onGetScenarioList } = props
  const classes = useStyle()
  const [mode, setMode] = useState<ScenarioListMode>(ScenarioListMode.View)
  const [checkedScenarioIDs, setCheckedScenarioIDs] = useState<number[]>([])

  useEffect(() => {
    onGetScenarioList()
  }, [onGetScenarioList])

  const onCheck = useCallback((scenarioID: number) => {
    const idx = checkedScenarioIDs.findIndex(id => id === scenarioID)
    if (idx === -1) {
      checkedScenarioIDs.push(scenarioID)
      setCheckedScenarioIDs([...checkedScenarioIDs])
      return
    }

    checkedScenarioIDs.splice(idx, 1)
    setCheckedScenarioIDs([...checkedScenarioIDs])
  }, [checkedScenarioIDs])

  const onRefresh = useCallback(() => {
    onGetScenarioList()
  }, [onGetScenarioList])

  return <>
      <Button className={classes.button} variant="outlined" onClick={onRefresh}>
        <Icon>refresh</Icon>
        update
      </Button>
      <Button onClick={() => setMode(ScenarioListMode.Delete)}>Delete</Button>
      <div className={classes.list}>
        {scenarioList.map(scenario => {
          const isChecked = checkedScenarioIDs.includes(scenario.id)
          return <ScenarioCard key={scenario.id} mode={mode} scenario={scenario} isChecked={isChecked} onCheck={onCheck}/>
        })}
      </div>
  </>
}
