import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import authReducer from '../features/auth'
import { authApi } from '../services'

const makeStore = () =>
  configureStore({
    devTools: true,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware),
    reducer: {
      auth: authReducer,
      [authApi.reducerPath]: authApi.reducer,
    },
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export const wrapper = createWrapper<AppStore>(makeStore)
