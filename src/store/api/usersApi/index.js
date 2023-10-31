import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import API_BASE_URL from '../../../utils/API_CONFIG';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
        headers: { 'content-type': 'application/json' },
    }),
    tagTypes: ['Users'],
    endpoints: builder => ({
        getStudentsByGrade: builder.query({
            query: () => `users?sortBy=averageGrade&order=desc`,
            providesTags: result =>
                result
                    ? [
                          ...result.map(({ id }) => ({ type: 'Users', id })),
                          { type: 'Users', id: 'Users' },
                      ]
                    : [{ type: 'Users', id: 'Users' }],
        }),

        createUser: builder.mutation({
            query: user => ({
                url: 'users',
                method: 'POST',
                body: JSON.stringify(user),
            }),
            invalidatesTags: [{ type: 'Users', id: 'Users' }],
        }),
    }),
});

export const { useGetStudentsByGradeQuery, useCreateUserMutation } = usersApi;
