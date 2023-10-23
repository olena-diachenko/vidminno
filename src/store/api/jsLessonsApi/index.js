import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import API_BASE_URL from '../../../utils/API_CONFIG';

export const jsLessonsApi = createApi({
    reducerPath: 'jsLessonsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
    }),
    endpoints: builder => ({
        getJsLessons: builder.query({
            query: limit => `/js-lessons?page=1&limit=${limit}`,
        }),
    }),
});

export const { useGetJsLessonsQuery } = jsLessonsApi;
