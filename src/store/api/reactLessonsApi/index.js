import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import API_BASE_URL from '../../../utils/API_CONFIG';

export const reactLessonsApi = createApi({
    reducerPath: 'reactLessonsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
    }),
    endpoints: builder => ({
        getReactLessons: builder.query({
            query: limit => `/react-lessons?page=1&limit=${limit}`,
        }),
    }),
});

export const { useGetReactLessonsQuery } = reactLessonsApi;
