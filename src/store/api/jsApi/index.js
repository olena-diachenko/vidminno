import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import API_BASE_URL from '../../../utils/API_CONFIG';

export const jsApi = createApi({
    reducerPath: 'jsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
    }),
    endpoints: builder => ({
        getLimitJsLessons: builder.query({
            query: limit => `/js-lessons?page=1&limit=${limit}`,
        }),

        getJsLessonById: builder.query({
            query: id => `/js-lessons/${id}`,
        }),

        getAddMaterialByJsLessonId: builder.query({
            query: id => `/js-lessons/${id}/additional-material`,
        }),

        getJsHomeworks: builder.query({
            query: () => `/js-homeworks`,
        }),

        getJsHomeworksByLessonId: builder.query({
            query: id => `/js-lessons/${id}/homeworks`,
        }),
    }),
});

export const {
    useGetLimitJsLessonsQuery,
    useGetJsLessonByIdQuery,
    useGetAddMaterialByJsLessonIdQuery,
    useGetJsHomeworksQuery,
    useGetJsHomeworksByLessonIdQuery,
} = jsApi;
