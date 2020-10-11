import { createStore, applyMiddleware, Middleware } from 'redux'
import rootReducer, { initStoreState } from '../reducer/rootReducer'
import { createEpicMiddleware } from 'redux-observable'
import rootEpics from '../epics/rootEpic'

const bindMiddleware = (middleware: Middleware[]) => {
  return applyMiddleware(...middleware)
}

export default function configureStore(preloadState = initStoreState) {
  const epicMiddleware = createEpicMiddleware()
  const store = createStore(rootReducer, preloadState, bindMiddleware([epicMiddleware]))
  epicMiddleware.run(rootEpics)
  return store
}
