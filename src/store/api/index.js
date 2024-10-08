import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import API_BASE_URL from './constants';

export const vidminnoApi = createApi({
  reducerPath: 'vidminnoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    headers: { 'content-type': 'application/json' },
  }),
  tagTypes: ['Users', 'UserJsHomework', 'UserReactHomework', 'Favorites'],
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

    getUserByEmail: builder.query({
      query: email => `users?search=${email}`,
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

    getJsHomeworksById: builder.query({
      query: id => `/js-homeworks/${id}`,
    }),

    getJsHomeworksByUserId: builder.query({
      query: id => `users/${id}/js-hw`,
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: 'UserJsHomework',
                id,
              })),
              { type: 'UserJsHomework', id: 'UserJsHomework' },
            ]
          : [{ type: 'UserJsHomework', id: 'UserJsHomework' }],
    }),

    saveJsHomeworkByUserId: builder.mutation({
      query: arg => ({
        url: `users/${arg.studentId}/js-hw`,
        method: 'POST',
        body: JSON.stringify(arg.hw),
      }),
      invalidatesTags: [{ type: 'UserJsHomework', id: 'UserJsHomework' }],
    }),

    getReactLessons: builder.query({
      query: () => '/react-lessons',
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

    getReactHomeworksById: builder.query({
      query: id => `/react-homeworks/${id}`,
    }),

    getReactHomeworksByUserId: builder.query({
      query: id => `users/${id}/react-hw`,
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: 'UserReactHomework',
                id,
              })),
              {
                type: 'UserReactHomework',
                id: 'UserReactHomework',
              },
            ]
          : [{ type: 'UserReactHomework', id: 'UserReactHomework' }],
    }),

    getReactHomeworksByLessonId: builder.query({
      query: id => `/react-lessons/${id}/homeworks`,
    }),

    saveReactHomeworkByUserId: builder.mutation({
      query: arg => ({
        url: `users/${arg.studentId}/react-hw`,
        method: 'POST',
        body: JSON.stringify(arg.hw),
      }),
      invalidatesTags: [{ type: 'UserReactHomework', id: 'UserReactHomework' }],
    }),

    getTechArticles: builder.query({
      query: () => '/technical-articles',
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: 'Favorites',
                id,
              })),
              {
                type: 'Favorites',
                id: 'Favorites',
              },
            ]
          : [{ type: 'Favorites', id: 'Favorites' }],
    }),

    getTechArticlesById: builder.query({
      query: id => `/technical-articles/${id}`,
    }),

    getTechArticlesByCategory: builder.query({
      query: category => `/technical-articles?filter=${category}`,
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: 'Favorites',
                id,
              })),
              {
                type: 'Favorites',
                id: 'Favorites',
              },
            ]
          : [{ type: 'Favorites', id: 'Favorites' }],
    }),

    getFavoriteTechArticles: builder.query({
      query: () => `/technical-articles?filter=true`,
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: 'Favorites',
                id,
              })),
              {
                type: 'Favorites',
                id: 'Favorites',
              },
            ]
          : [{ type: 'Favorites', id: 'Favorites' }],
    }),

    toggleFavoriteArticles: builder.mutation({
      query: arg => ({
        url: `/technical-articles/${arg.id}`,
        method: 'PUT',
        body: JSON.stringify(arg.body),
      }),
      invalidatesTags: [{ type: 'Favorites', id: 'Favorites' }],
    }),
  }),
});

export const {
  useGetStudentsByGradeQuery,
  useCreateUserMutation,
  useGetUserByEmailQuery,
  useGetUsefulVideosQuery,
  useGetJsLessonsQuery,
  useGetLimitJsLessonsQuery,
  useGetJsLessonByIdQuery,
  useGetAddMaterialByJsLessonIdQuery,
  useGetJsHomeworksQuery,
  useGetJsHomeworksByLessonIdQuery,
  useGetJsHomeworksByIdQuery,
  useGetJsHomeworksByUserIdQuery,
  useSaveJsHomeworkByUserIdMutation,
  useGetLimitReactLessonsQuery,
  useGetReactLessonsQuery,
  useGetReactLessonByIdQuery,
  useGetAddMaterialByReactLessonIdQuery,
  useGetReactHomeworksQuery,
  useGetReactHomeworksByIdQuery,
  useGetReactHomeworksByUserIdQuery,
  useGetReactHomeworksByLessonIdQuery,
  useSaveReactHomeworkByUserIdMutation,
  useGetTechArticlesQuery,
  useGetTechArticlesByIdQuery,
  useGetTechArticlesByCategoryQuery,
  useGetFavoriteTechArticlesQuery,
  useToggleFavoriteArticlesMutation,
} = vidminnoApi;
