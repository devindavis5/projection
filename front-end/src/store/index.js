import { createStore } from 'redux'
import { reducer, initialState } from './reducers'
//done in this file
export const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )