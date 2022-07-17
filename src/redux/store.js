import { configureStore } from '@reduxjs/toolkit'
import rootreducer from './rootreducer'
import createSagaMiddleware from 'redux-saga'
import productsaga from './productsaga'

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: rootreducer,
    middleware:()=>[sagaMiddleware]
})

sagaMiddleware.run(productsaga)