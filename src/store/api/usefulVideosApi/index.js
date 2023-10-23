import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import API_BASE_URL from '../../../utils/API_CONFIG';

export const usefulVideosApi = createApi({
    reducerPath: 'usefulVideosApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
    }),
    endpoints: builder => ({
        getUsefulVideos: builder.query({
            query: () => `useful-videos`,
        }),
    }),
});

export const { useGetUsefulVideosQuery } = usefulVideosApi;
