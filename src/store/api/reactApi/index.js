import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import API_BASE_URL from '../../../utils/API_CONFIG';

export const reactApi = createApi({
    reducerPath: 'reactApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
    }),
    endpoints: builder => ({
        getLimitReactLessons: builder.query({
            query: limit => `/react-lessons?page=1&limit=${limit}`,
        }),

        getReactLessonById: builder.query({
            query: id => `/react-lessons/${id}`,
        }),

        getAddMaterialByReactLessonId: builder.query({
            query: id => `/react-lessons/${id}/additional-material`,
        }),

        getReactHomeworks: builder.query({
            query: () => `/react-homeworks`,
        }),

        getReactHomeworksByLessonId: builder.query({
            query: id => `/react-lessons/${id}/homeworks`,
        }),
    }),
});

export const {
    useGetLimitReactLessonsQuery,
    useGetReactLessonByIdQuery,
    useGetAddMaterialByReactLessonIdQuery,
    useGetReactHomeworksQuery,
    useGetReactHomeworksByLessonIdQuery,
} = reactApi;
