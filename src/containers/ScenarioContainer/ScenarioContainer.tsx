import React, { useCallback } from 'react'
import ScenarioList from '../../components/ScenarioList/ScenarioList'
import FakeScenarioImg from '../../assets/icons/fake-scenario.png'

export default function ScenarioContainer() {
  // const { scenarios } = useSelector(.....)
  const scenarioList = [
    {
      id: 1,
      display_name: 'abc',
      created_at: '2019-12-19T11:22:33Z',
      updated_at: '2019-12-19T11:22:33Z',
      thumbnail_url: FakeScenarioImg,
    },
    {
      id: 2,
      display_name: 'abce',
      created_at: '2019-12-19T11:22:33Z',
      updated_at: '2019-12-19T11:22:33Z',
      thumbnail_url: FakeScenarioImg,
    }
  ]

  const onGetScenarioList = useCallback(() => {
    console.log('123')
  }, [])

  return <ScenarioList onGetScenarioList={onGetScenarioList} scenarioList={scenarioList}/>
}
