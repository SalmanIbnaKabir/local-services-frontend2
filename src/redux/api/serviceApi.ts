import { baseApi } from "./baseApi";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getServices: build.query({
      query: () => "/services",
      providesTags: ["service"],
    }),
    singleService: build.query({
      query: (id) => `/service/${id}`,
      providesTags: ["service"],
    }),
  }),
});

export const { useGetServicesQuery, useSingleServiceQuery } = serviceApi;
