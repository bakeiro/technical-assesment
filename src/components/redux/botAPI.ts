import { URL_AWS_FETCH_BASE } from "../const/Constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const botAPI = createApi({
  reducerPath: "botAPI",
  baseQuery: fetchBaseQuery({ baseUrl: URL_AWS_FETCH_BASE }),
  keepUnusedDataFor: 60 * 60 * 24, // 24h
  endpoints: (builder) => ({
    getBotsPage: builder.query({
      query: (pageNum) => "?page=" + pageNum,
      transformResponse: (response) => response.results,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      merge: (currentCache, responseData, args) => {
        if (args.arg > 1) {
          currentCache.push(...responseData);
        }
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
    }),
    getBotById: builder.query({
      query: (botId) => "/" + botId,
    })
  }),
});

export const { useGetBotsPageQuery, useGetBotByIdQuery } = botAPI;