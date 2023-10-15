import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    userSignup: build.mutation({
      query: (data) => ({
        url: "/signup",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),

    allUser: build.query({
      query: () => "/user",
      providesTags: ["user"],
    }),
    singleUser: build.query({
      query: (id) => `/user/${id}`,
      providesTags: ["user"],
    }),
  }),
});

export const {
  useUserLoginMutation,
  useUserSignupMutation,
  useAllUserQuery,
  useSingleUserQuery,
} = userApi;
