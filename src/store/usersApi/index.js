import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import API_BASE_URL from '../../utils/API_CONFIG';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    tagTypes: ['Users'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
        headers: { 'content-type': 'application/json' },
    }),
    endpoints: builder => ({
        getStudents: builder.query({
            query: () => `users`,
        }),

        createUser: builder.mutation({
            query: user => ({
                url: 'users',
                method: 'POST',
                body: JSON.stringify(user),
            })
        }),
    }),
});

export const { useCreateUserMutation } = usersApi;
