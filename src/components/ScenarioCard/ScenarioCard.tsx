import React from 'react'
import { makeStyles, Card, CardHeader, CardMedia, CardContent, CardActions, Icon } from '@material-ui/core'
import dayjs from 'dayjs'
import IconLock from '../../assets/icons/status_lock.svg'
import IconRun from '../../assets/icons/status_run.svg'
import IconStop from '../../assets/icons/status_stop.svg'
import IconEdit from '../../assets/icons/scenario_edit.svg'
import IconDetail from '../../assets/icons/scenario_detail.svg'
import IconData from '../../assets/icons/scenario_data.svg'
import { Scenario } from '../../model/scenario'
import { ScenarioListMode } from '../ScenarioList/ScenarioList'
import { useCallback } from 'react'
import DeleteCheckbox from './DeleteCheckbox'

const useStyle = makeStyles({
  card: {
    width: 230,
    marginTop: 12,
    border: 'solid 1px #cccccc',
    boxShadow: 'none !important',
    marginRight: 16,
    position: 'relative',
    '& .material-icons': {
      width: 30,
      height: 30,
    },
    '& .content': {
      fontSize: 12,
      fontWeight: 600,
      color: '#525b5c',
    },
    '& .thumbnail': {
      height: 152,
    },
    '& .actions': {
      padding: 16,
      display: 'flex',
      justifyContent: 'space-around',
    },
  },
})

interface Props {
  scenario: Scenario
  mode: ScenarioListMode
  isChecked: boolean
  onCheck: (scenarioID: number) => void
}

export default function ScenarioCard(props: Props) {
  const { mode, scenario , isChecked, onCheck} = props
  const classes = useStyle()

  const onSelect = useCallback(() => {
    onCheck(scenario.id)
  }, [onCheck, scenario])

  return (
    <Card className={classes.card}>
      {mode === ScenarioListMode.Delete && <DeleteCheckbox onSelect={onSelect} isChecked={isChecked}/>}
      <CardHeader title={
        <>
          <Icon>
            <img src={IconLock} alt="Lock"></img>
          </Icon>
          <Icon>
            <img src={IconRun} alt="Run"></img>{' '}
          </Icon>
          <Icon>
            <img src={IconStop} alt="Stop"></img>
          </Icon>
        </>
      }></CardHeader>
      <CardMedia component="img" image={scenario.thumbnail_url} className={"thumbnail"}></CardMedia>
      <CardContent className={"content"}>
        <div>{scenario.display_name}</div>
        <div>{dayjs(scenario.updated_at).format('YYYY/MM/DD HH:mm')}</div>
      </CardContent>
      {mode === ScenarioListMode.View && (
        <CardActions className="actions">
          <Icon>
            <img src={IconEdit} alt="edit"></img>
          </Icon>
          <Icon>
            <img src={IconDetail} alt="detail"></img>
          </Icon>
          <Icon>
            <img src={IconData} alt="edit"></img>
          </Icon>
        </CardActions>
      )}
    </Card>
  )
}
