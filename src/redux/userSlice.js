import {createSlice} from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { nanoid } from "nanoid";

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
      })

    }),
  });

export const { useGetUsersQuery, useAddUsersMutation } = usersApi;

const userInitialState = [];

const userSlice = createSlice(
    {
        name:"user",
        initialState: userInitialState,
        reducers:{
            deleteUser(state, action){
                const index = state.findIndex(state => state.id === action.payload);
                state.splice(index, 1);
            },
            editFavorite(state, action){
                for(let user of state){
                    if(user.id === action.payload){
                        user.favorites = !user.favorites;
                        break;
                    }
                }
            }
        }
    }
)

export const {addUser, deleteUser, editFavorite} = userSlice.actions;
export const userReducer = userSlice.reducer;