import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReauth } from './baseQuery'
import {
  AuthMeResponse,
  ConfirmRegistrationRequest,
  ResendConfirmationCodeRequest,
  SignInRequest,
  SignInResponse,
  UpdateTokensResponse,
} from './types'

export const authApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    authMe: builder.query<AuthMeResponse, void>({
      query: () => ({ url: 'auth/me' }),
    }),
    confirmRegistration: builder.mutation<{}, ConfirmRegistrationRequest>({
      query: body => ({ body, method: 'POST', url: 'auth/registration-confirmation' }),
    }),
    login: builder.mutation<SignInResponse, SignInRequest>({
      query: body => ({ body, method: 'POST', url: 'auth/login' }),
    }),
    logout: builder.mutation<{}, void>({
      query: () => ({
        method: 'POST',
        url: 'auth/logout',
      }),
    }),
    resendConfirmationCode: builder.mutation<{}, ResendConfirmationCodeRequest>({
      query: body => ({ body, method: 'POST', url: 'auth/registration-email-resending' }),
    }),
    updateTokens: builder.mutation<UpdateTokensResponse, void>({
      query: () => ({ method: 'POST', url: 'auth/update-tokens' }),
    }),
  }),
  reducerPath: 'api/auth',
})
