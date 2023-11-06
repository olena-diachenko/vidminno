import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import API_BASE_URL from '../../utils/API_CONFIG';

export const vidminnoApi = createApi({
    reducerPath: 'vidminnoApi',
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

        getUsefulVideos: builder.query({
            query: () => `useful-videos`,
        }),

        getJsLessons: builder.query({
            query: () => '/js-lessons',
        }),

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
    useGetStudentsByGradeQuery,
    useCreateUserMutation,
    useGetUsefulVideosQuery,
    useGetJsLessonsQuery,
    useGetLimitJsLessonsQuery,
    useGetJsLessonByIdQuery,
    useGetAddMaterialByJsLessonIdQuery,
    useGetJsHomeworksQuery,
    useGetJsHomeworksByLessonIdQuery,
    useGetLimitReactLessonsQuery,
    useGetReactLessonByIdQuery,
    useGetAddMaterialByReactLessonIdQuery,
    useGetReactHomeworksQuery,
    useGetReactHomeworksByLessonIdQuery,
} = vidminnoApi;
