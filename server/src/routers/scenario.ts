import express from 'express'

const fakeData = [
  {
    id: '1',
    display_name: 'abc',
    created_at: '2019-12-19T11:22:33Z',
    updated_at: '2019-12-20T03:04:05Z',
    thumbnail_url: 'images/fake-scenario.png',
  },
  {
    id: '2',
    display_name: 'def',
    created_at: '2019-12-18T11:22:33Z',
    updated_at: '2019-12-20T07:08:09Z',
    thumbnail_url: 'images/fake-scenario.png',
  },
  {
    id: '3',
    display_name: 'qwe',
    created_at: '2019-12-19T11:22:34Z',
    updated_at: '2019-12-20T12:00:10Z',
    thumbnail_url: 'images/fake-scenario.png',
  },
  {
    id: '4',
    display_name: 'htyg',
    created_at: '2019-12-16T11:52:39Z',
    updated_at: '2019-12-20T03:55:44Z',
    thumbnail_url: 'images/fake-scenario.png',
  },
  {
    id: '5',
    display_name: 'vvvv',
    created_at: '2019-12-1519T03:00:28Z',
    updated_at: '2019-12-16T02:28:25Z',
    thumbnail_url: 'images/fake-scenario.png',
  },
  {
    id: '6',
    display_name: 'nnmm',
    created_at: '2019-12-17T09:56:04Z',
    updated_at: '2019-12-19T11:11:11Z',
    thumbnail_url: 'images/fake-scenario.png',
  },
]

const Scenariorouter = express.Router()

Scenariorouter.get('/', function(req, res) {
  res.send(fakeData)
})

Scenariorouter.post('/', function(req, res) {
  const newScenario = {
    ...req.body,
    id: fakeData.length + 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    thumbnail_url: 'images/fake-scenario.png',
  }
  fakeData.push(newScenario)
  res.send(newScenario)
})

Scenariorouter.delete('/:id', function(req, res) {
  const ids = req.params.id.split(',')
  ids.forEach(toBeDeletedId => {
    const idx = fakeData.findIndex(s => s.id === toBeDeletedId)
    fakeData.splice(idx, 1)
  })
  res.send(fakeData)
})

export default Scenariorouter
