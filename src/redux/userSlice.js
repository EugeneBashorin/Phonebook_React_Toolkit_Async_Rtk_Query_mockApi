import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://64a03db3ed3c41bdd7a720ce.mockapi.io' }),
    tagTypes: ['user'],
    endpoints: (builder) => ({

      getUsers: builder.query({
        query: () => `/contacts`,
        providesTags:['user']
      }),

      addUsers: builder.mutation({
        query: (values) => ({
            url: `/contacts`,
            method: 'POST',
            body: values,
        }),
        invalidatesTags:['user']
      }),

      deleteUser: builder.mutation({
        query: (id) => ({
            url: `/contacts/${id}`,
            method:'DELETE',
        }),
        invalidatesTags:['user']
      }),

      changeFavoriteStatus: builder.mutation({
        query: (value) => ({
            url: `/contacts/${value.id}`,
            method:'PUT',
            body: {...value, favorites: !value.favorites},
        }),
        invalidatesTags:['user']
      }),

    }),
  });

export const { 
    useGetUsersQuery, 
    useChangeFavoriteStatusMutation, 
    useAddUsersMutation, 
    useDeleteUserMutation 
} = usersApi;