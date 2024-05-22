import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import rootReducer from './modules'
import { useDispatch } from 'react-redux'

const store = configureStore({
  reducer: rootReducer,
  // @ts-expect-error: 아래 ts 에러가 나지만 사용하는데에는 문제가 없기에 주석 처리함
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
